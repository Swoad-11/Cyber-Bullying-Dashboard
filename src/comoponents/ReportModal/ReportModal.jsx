import React from "react";

export default function ReportModal({ selectedReport, setSelectedReport }) {
  console.log(selectedReport);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="bg-gray-600 rounded-lg w-[350px] min-[765px]:w-[550px] p-6 text-center relative">
          <h2 className="text-xl font-semibold mb-4">
            {selectedReport.Candidate_Name}'s Report Details
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Platform:</span>{" "}
              {selectedReport.Platform}
            </p>
            <p>
              <span className="font-semibold">Date of Post:</span>{" "}
              {selectedReport.Date_of_Post}
            </p>
            <p>
              <span className="font-semibold">Type of TFGBV:</span>{" "}
              {selectedReport.Type_of_TFGBV}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {selectedReport.Description}
            </p>
            <p>
              <span className="font-semibold">Keywords:</span>{" "}
              {Array.isArray(selectedReport.Keywords)
                ? selectedReport.Keywords.join(", ")
                : selectedReport.Keywords}
            </p>
            <p>
              <span className="font-semibold">Screenshot:</span>{" "}
              <a
                href={selectedReport.Screenshot}
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
                href={selectedReport.Original_Link}
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
                href={selectedReport.Archived_Link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                Archive
              </a>
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
    </>
  );
}
