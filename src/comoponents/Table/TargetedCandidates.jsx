export default function TargetedCandidates() {
  const data = [
    {
      name: "Rumeen Farhana",
      party: "BNP",
      constituency: "Comilla",
      platform: "Facebook",
    },
    {
      name: "Tasmia Mahmood",
      party: "AL",
      constituency: "Mymensingh",
      platform: "Twitter",
    },
    {
      name: "Saleha Akhtar",
      party: "Jatiya Party",
      constituency: "Dhaka-19",
      platform: "Twitter",
    },
    {
      name: "Nusrat Jahan",
      party: "BNP",
      constituency: "Chattogram-8",
      platform: "Facebook",
    },
    {
      name: "Nabila Sultana",
      party: "AL",
      constituency: "Rajshahi-2",
      platform: "Twitter",
    },
  ];

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

            <tbody className="divide-y divide-gray-200">
              {data.map((item, idx) => (
                <tr key={idx} className="*:text-gray-200 *:first:font-medium">
                  <td className="px-3 py-2 whitespace-nowrap">{item.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.party}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.constituency}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.platform}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
