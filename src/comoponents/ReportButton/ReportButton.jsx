import React, { useEffect, useState } from "react";
import { TbMessageReportFilled } from "react-icons/tb";
import femaleCandidates from "../../assets/candidate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReportButton() {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  // New states for candidate selection
  const [candidateName, setCandidateName] = useState("");
  const [constituency, setConstituency] = useState("");
  const [party, setParty] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCandidateChange = (e) => {
    const name = e.target.value;
    setCandidateName(name);

    const candidate = femaleCandidates.find((c) => c.name === name);
    if (candidate) {
      setConstituency(candidate.constituency);
      setParty(candidate.party);
    } else {
      setConstituency("");
      setParty("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!platform || !url || !candidateName) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    const formData = new FormData();
    formData.append("candidateName", candidateName);
    formData.append("constituency", constituency);
    formData.append("party", party);
    formData.append("platform", platform);
    formData.append("url", url);

    fetch(
      "https://script.google.com/macros/s/AKfycbzM3-p1bDUnH4DEuHes-zOW8mG2uaxKHkxTjxeIKmU_SoOu247rpDH9iM4Wi5MKjxSp/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        toast.success("Report submitted successfully!");
        setCandidateName("");
        setConstituency("");
        setParty("");
        setPlatform("");
        setUrl("");
        setShowModal(false);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        toast.error(`Error: ${result.message || "Submission failed."}`);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showMessage && (
        <div className="fixed bottom-24 right-10 bg-white text-gray-800 p-4 rounded shadow-lg z-50 max-w-xs">
          <p className="text-sm">
            If you see any cyberbullying-related content, please click the
            button and send us the URL.
          </p>
        </div>
      )}

      <button
        className="fixed text-4xl bottom-10 right-10 z-50 bg-red-400 text-white p-2 rounded-full shadow-lg hover:bg-red-500 transition"
        onClick={() => {
          setIsSubmitting(false);
          setShowModal(true);
        }}
      >
        <TbMessageReportFilled />
      </button>

      {showModal && (
        <div className="fixed mx-auto inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-gray-500 p-6 rounded-lg shadow-md max-w-md relative w-[350px] min-[765px]:w-[550px]">
            <button
              onClick={() => {
                setIsSubmitting(false);
                setShowModal(false);
              }}
              className="absolute top-3 right-4 text-red-300 hover:text-red-400"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-200">
              Report Abuse
            </h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleSubmit}>
              {/* Candidate Name Dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Candidate Name
                </label>
                <select
                  value={candidateName}
                  onChange={handleCandidateChange}
                  className="block w-full border border-gray-200 bg-gray-100 rounded p-2 text-gray-500"
                >
                  <option value="">Select a candidate...</option>
                  {femaleCandidates.map((candidate) => (
                    <option key={candidate.name} value={candidate.name}>
                      {candidate.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Auto-filled Constituency */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Constituency
                </label>
                <input
                  type="text"
                  value={constituency}
                  disabled
                  className="block w-full border border-gray-300 bg-gray-100 rounded p-2 text-gray-700"
                />
              </div>

              {/* Auto-filled Party Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Party Name
                </label>
                <input
                  type="text"
                  value={party}
                  disabled
                  className="block w-full border border-gray-300 bg-gray-100 rounded p-2 text-gray-700"
                />
              </div>

              {/* Platform */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="block w-full border border-gray-200 bg-gray-100 rounded p-2 text-gray-500"
                >
                  <option value="">Select...</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="TikTok">TikTok</option>
                </select>
              </div>

              {/* URL */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="block w-full border border-gray-300 bg-gray-100 rounded p-2 placeholder-gray-500 text-gray-500"
                  placeholder="Enter URL"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white font-bold py-2 rounded flex items-center justify-center gap-2 ${
                  isSubmitting || !platform || !url
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={isSubmitting || !platform || !url}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
