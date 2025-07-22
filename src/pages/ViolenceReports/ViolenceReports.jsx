import { useState } from "react";

const reports = [
  {
    id: 1,
    candidateName: "Sabina Yasmin",
    platform: "Facebook",
    date: "2025-07-01",
    type: "Slut-shaming",
    description: "Inappropriate comments made on public post.",
    keywords: ["shame", "disgusting"],
    screenshot: "/screenshot1.png",
    postLink: "https://facebook.com/example",
    archiveLink: "https://archive.org/example",
    severity: "High",
  },
];

export default function ViolenceReports() {
  const [selectedReport, setSelectedReport] = useState(null);
  return (
    <>
      <title>Dashboard | Violence Reports </title>
      <div className="overflow-x-auto custom-scrollbar max-[915px]:mt-18 min-[915px]:mt-6 min-[915px]:w-4xl mx-auto p-4">
        <h2 className="text-xl text-center font-semibold mb-4">
          Participating Female Election Candidates
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="sticky top-0 bg-gray-800 ltr:text-left rtl:text-right">
              <tr>
                <th className="p-3">Candidate Name</th>
                <th className="p-3">Platform</th>
                <th className="p-3">Date of Post</th>
                <th className="p-3">Type of TFGBV</th>
                <th className="p-3">Severity</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-neutral-600">
                  <td className="p-3">{report.candidateName}</td>
                  <td className="p-3">{report.platform}</td>
                  <td className="p-3">{report.date}</td>
                  <td className="p-3">{report.type}</td>
                  <td className="p-3">{report.severity}</td>
                  <td className="p-3">
                    <button
                      className="px-3 py-1.5 text-sm font-medium  transition-colors  focus:relative text-gray-200 bg-gray-700 hover:text-white rounded-sm"
                      onClick={() => setSelectedReport(report)}
                    >
                      See Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedReport && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-gray-600 rounded-lg w-[350px] min-[765px]:w-[550px] p-6 text-center relative">
              <h2 className="text-xl font-semibold mb-4">
                {selectedReport.candidateName}'s Report Details
              </h2>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Platform:</span>{" "}
                  {selectedReport.platform}
                </p>
                <p>
                  <span className="font-semibold">Date of Post:</span>{" "}
                  {selectedReport.date}
                </p>
                <p>
                  <span className="font-semibold">Type of TFGBV:</span>{" "}
                  {selectedReport.type}
                </p>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {selectedReport.description}
                </p>
                <p>
                  <span className="font-semibold">Keywords:</span>{" "}
                  {selectedReport.keywords.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Screenshot:</span>{" "}
                  <a
                    href={selectedReport.screenshot}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline"
                  >
                    View Screenshot
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Original Link:</span>{" "}
                  <a
                    href={selectedReport.postLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline"
                  >
                    Original
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Archived Link:</span>{" "}
                  <a
                    href={selectedReport.archiveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline"
                  >
                    Archive
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Severity:</span>{" "}
                  {selectedReport.severity}
                </p>
              </div>

              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
