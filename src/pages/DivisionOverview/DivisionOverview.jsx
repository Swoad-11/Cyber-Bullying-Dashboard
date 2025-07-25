import BangladeshMap from "../../comoponents/Heatmap/BangladeshMap";

const divisionCandidates = {
  Dhaka: [
    { name: "Candidate A", party: "Party X", constituency: "Dhaka-1" },
    { name: "Candidate B", party: "Party Y", constituency: "Dhaka-3" },
  ],
  Chattogram: [
    { name: "Candidate C", party: "Party Z", constituency: "Chattogram-2" },
  ],
  Khulna: [
    { name: "Candidate D", party: "Party X", constituency: "Khulna-4" },
    { name: "Candidate E", party: "Party Y", constituency: "Khulna-5" },
  ],
  Rajshahi: [
    { name: "Candidate F", party: "Party Z", constituency: "Rajshahi-1" },
  ],
  Barisal: [],
  Sylhet: [{ name: "Candidate G", party: "Party X", constituency: "Sylhet-2" }],
  Rangpur: [
    { name: "Candidate H", party: "Party Y", constituency: "Rangpur-3" },
  ],
  Mymensingh: [],
};

export default function DivisionOverview() {
  return (
    <>
      <title>Dashboard | Division Overview</title>
      <div className="p-6 space-y-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-white">
          Division-wise Female Candidates
        </h1>
        <BangladeshMap />
        {/*<div className="grid grid-cols-2 gap-16">
           <div className="w-2xl"></div>

          <div className="bg-gray-800 rounded-lg p-6 text-white ">
            <h2 className="text-xl font-semibold mb-4">
              Candidates by Division
            </h2>
            <div className="space-y-4">
              {Object.entries(divisionCandidates).map(
                ([division, candidates]) => (
                  <div key={division} className="border-b border-gray-600 pb-2">
                    <h3 className="font-bold text-green-400">{division}</h3>
                    {candidates.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {candidates.map((candidate, index) => (
                          <li key={index}>
                            <span className="font-semibold">
                              {candidate.name}
                            </span>{" "}
                            -{" "}
                            <span className="text-blue-400">
                              {candidate.party}
                            </span>{" "}
                            -{" "}
                            <span className="italic">
                              {candidate.constituency}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">No candidates</p>
                    )}
                  </div>
                )
              )}
            </div>
          </div> 
        </div>*/}
      </div>
    </>
  );
}
