import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import geoData from "../data/bangladesh-divisions.geojson";

const candidateData = {
  Dhaka: 12,
  Chattogram: 8,
  Rajshahi: 6,
  Khulna: 4,
  Barisal: 3,
  Sylhet: 5,
  Rangpur: 7,
  Mymensingh: 4,
};

const getColor = (value) => {
  return value > 10
    ? "#0f766e"
    : value > 7
    ? "#14b8a6"
    : value > 4
    ? "#2dd4bf"
    : value > 1
    ? "#5eead4"
    : "#cffafe";
};

const style = (feature) => {
  const value = candidateData[feature.properties.name] || 0;
  return {
    fillColor: getColor(value),
    weight: 1,
    color: "#111827",
    fillOpacity: 0.7,
  };
};

const BangladeshHeatmap = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: () => {
        setActiveRegion(
          `${feature.properties.name}: ${
            candidateData[feature.properties.name] || 0
          } candidates`
        );
      },
      mouseout: () => setActiveRegion(null),
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-xl text-white mb-4 text-center font-semibold">
        Female Candidates by Division
      </h2>
      <MapContainer
        center={[24, 90]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature}>
          <Tooltip direction="center" sticky>
            {activeRegion}
          </Tooltip>
        </GeoJSON>
      </MapContainer>
    </div>
  );
};

export default BangladeshHeatmap;
