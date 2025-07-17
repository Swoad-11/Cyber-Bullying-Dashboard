import React from "react";

export default function ProfileModal({ selectedCandidate }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="bg-gray-200 rounded-lg w-[350px] min-[765px]:w-[550px] p-6 text-center relative">
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
            <img
              src={selectedCandidate.image}
              alt={selectedCandidate.name}
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800">
              {selectedCandidate.name}
            </h3>
            <p className="text-gray-500 mb-1">
              {" "}
              Political Party: {selectedCandidate.party}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Age: {selectedCandidate.age}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Education: {selectedCandidate.education}
            </p>
            <p className="text-gray-700 text-sm">{selectedCandidate.details}</p>
            <button
              type="button"
              onClick={() => setSelectedCandidate(null)}
              className="px-3 py-1.5 mt-4 text-sm font-medium  transition-colors  focus:relative text-gray-200 bg-gray-700 hover:text-white rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
