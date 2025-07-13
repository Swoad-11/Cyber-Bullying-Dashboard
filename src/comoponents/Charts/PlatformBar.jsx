import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";

const platforms = [
  { name: "Facebook", icon: <FaFacebook />, count: 18, color: "#1877F2" },
  { name: "Twitter", icon: <FaTwitter />, count: 9, color: "#1DA1F2" },
  { name: "YouTube", icon: <FaYoutube />, count: 4, color: "#FF0000" },
  { name: "TikTok", icon: <FaTiktok />, count: 2, color: "#25F4EE" },
  { name: "Instagram", icon: <FaInstagram />, count: 5, color: "#E1306C" },
];

export default function PlatformBars() {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-6 text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Violence Reports by Platform
      </h2>
      <div className="space-y-4">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-center space-x-4">
            <div className="text-2xl" style={{ color: p.color }}>
              {p.icon}
            </div>
            <div className="w-full bg-gray-700 rounded h-4 relative">
              <div
                className="h-4 rounded"
                style={{
                  width: `${p.count * 5}%`,
                  backgroundColor: p.color,
                }}
              ></div>
            </div>
            <span className="w-6 text-right">{p.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
