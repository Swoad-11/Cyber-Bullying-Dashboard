import React, { useEffect, useState } from "react";
import { TbMessageReportFilled } from "react-icons/tb";

export default function ReportButton() {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!platform || !url) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    console.log("Sending data:", { platform, url });
    setPlatform("");
    setUrl("");
    setShowModal(false);
    alert("Thank you for your report!");
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

      {/* Floating Button */}
      <button
        className="fixed text-4xl bottom-10 right-10 z-50 bg-red-400 text-white p-2 rounded-full shadow-lg hover:bg-red-500 transition"
        onClick={() => setShowModal(true)}
      >
        <TbMessageReportFilled />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-gray-500 p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-red-300 hover:text-red-400"
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-4 text-gray-200">
              Report Abuse
            </h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="block w-full border border-gray-200 bg-gray-100 rounded p-2 text-gray-500 "
                >
                  <option value="">Select...</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="TikTok">TikTok</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">URL</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="block w-full border border-gray-300 bg-gray-100 rounded p-2 placeholder-gray-500"
                  placeholder="Enter URL"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white font-bold py-2 rounded ${
                  !platform || !url ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!platform || !url}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
