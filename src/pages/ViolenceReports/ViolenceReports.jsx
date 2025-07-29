import { useState } from "react";
import ReportModal from "../../comoponents/ReportModal/ReportModal";

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
          <ReportModal
            selectedReport={selectedReport}
            setSelectedReport={setSelectedReport}
          />
        )}
      </div>
    </>
  );
}
