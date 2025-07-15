import { useState } from "react";

const candidates = [
  {
    id: 1,
    name: "Ayesha Rahman",
    party: "NCP",
    age: 42,
    education: "Master's in Political Science, Dhaka University",
    details:
      "10 years of experience in women's rights advocacy. Contesting from Dhaka-3 for parliamentary elections.",
    image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    party: "BNP",
    age: 38,
    education: "LLB, BRAC University",
    details:
      "Known for her strong activism in education reforms. Running from Chattogram-5.",
    image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/61-513.png",
  },
];

export default function FemaleCandidates() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <>
      <title> Dashboard | Female Candidates </title>

      <div className="overflow-x-auto custom-scrollbar max-[915px]:mt-18 min-[915px]:mt-6 mx-auto w-full p-4">
        <h2 className="text-xl text-center font-semibold mb-4">
          Targeted Candidates
        </h2>
        <table className="min-w-full divide-y-2 divide-gray-200 rounded-lg">
          <thead className="sticky top-0 bg-gray-800 ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-white text-center">
              <th className="px-6 py-4 whitespace-nowrap">#</th>
              <th className="px-6 py-4 whitespace-nowrap">Candidate Name</th>
              <th className="px-6 py-4 whitespace-nowrap">Party</th>
              <th className="px-6 py-4 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {candidates.map((candidate, index) => (
              <tr
                key={candidate.id}
                className="transition duration-300 ease-in-out  hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {candidate.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {candidate.party}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    className="px-3 py-1.5 text-sm font-medium  transition-colors  focus:relative text-gray-200 bg-gray-700 hover:text-white rounded-sm"
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedCandidate && (
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
              <p className="text-gray-700 text-sm">
                {selectedCandidate.details}
              </p>
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
      )}
    </>
  );
}
