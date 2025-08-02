import { NavLink } from "react-router";
import { BeatLoader } from "react-spinners";

export default function TargetedCandidates({ reports, loading }) {
  // Step 1: Count reports by candidate
  const candidateCounts = reports.reduce((acc, report) => {
    const name = report.Candidate_Name;
    if (!acc[name]) {
      acc[name] = {
        count: 0,
        party: report.Party_Name || "N/A",
        constituency: report.Constituency || "N/A",
        platform: report.Platform || "N/A",
      };
    }
    acc[name].count += 1;
    return acc;
  }, {});

  // Step 2: Convert to array and sort by count descending
  const sortedCandidates = Object.entries(candidateCounts)
    .map(([name, info]) => ({
      name,
      party: info.party,
      constituency: info.constituency,
      platform: info.platform,
      count: info.count,
    }))
    .sort((a, b) => b.count - a.count);

  // Step 3: Pick top 5 (or any number)
  const topCandidates = sortedCandidates.slice(0, 5);

  return (
    <>
      <div className="bg-gray-800 rounded-lg shadow p-4 min-h-full">
        <h2 className="text-xl font-semibold mb-2">Targeted Candidates</h2>
        <div className="overflow-x-auto custom-scrollbar h-full">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="sticky top-0 bg-gray-800 ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-white">
                <th className="px-3 py-2">Candidate Name</th>
                <th className="px-3 py-2">Political Party</th>
                <th className="px-3 py-2">Constituency</th>
                <th className="px-3 py-2">Platform</th>
              </tr>
            </thead>
            {loading ? (
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className="flex justify-center items-center py-10">
                      <span className="text-xl text-gray-400 mr-6">
                        Loading
                      </span>
                      <BeatLoader />
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="divide-y divide-gray-200">
                {topCandidates.map((item, idx) => (
                  <tr key={idx} className="*:text-gray-200 *:first:font-medium">
                    <td className="px-3 py-2 whitespace-nowrap">{item.name}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.party}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.constituency}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.platform}
                    </td>
                  </tr>
                ))}
                <NavLink
                  to="/violence-reports"
                  className="mt-8 inline-flex items-center gap-2 rounded-sm border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent focus:ring-3 focus:outline-hidden"
                >
                  <span className="text-sm font-medium"> See More </span>
                </NavLink>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
