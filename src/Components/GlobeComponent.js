import React, { useEffect, useReducer, useState } from "react";
import Globe from "react-globe.gl";

const initialState = "unloaded";
let markers;

function reducer(state, action) {
  switch (action.type) {
    case "load":
      return "loaded";
    default:
      return state;
  }
}

const markerData = [
  {
    lat: 45.0,
    lng: -75.0,
    size: 1,
    city: "Marker City",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    size: 1,
    city: "ABCD City",
  },
  { lat: 34.0522, lng: -118.2437, size: 1, city: "E City" },
  { lat: 40.7128, lng: -74.006, size: 1, city: "F City" },
  { lat: 51.5074, lng: -0.1278, size: 1, city: "G City" },
  { lat: 48.8566, lng: 2.3522, size: 1, city: "G City" },
  { lat: -33.8679, lng: 151.2073, size: 1, city: "H City" },
  { lat: 35.6895, lng: 139.6917, size: 1, city: "I City" },
  { lat: 52.52, lng: 13.405, size: 1, city: "ABCD City" },
  { lat: 55.7558, lng: 37.6176, size: 1, city: "ABCD City" },
  { lat: -22.9068, lng: -43.1729, size: 1, city: "ABCD City" },
  { lat: 19.076, lng: 72.8777, size: 1, city: "ABCD City" },
  { lat: 1.3521, lng: 103.8198, size: 1, city: "ABCD City" },
  { lat: 25.276987, lng: 55.296249, size: 1, city: "ABCD City" },
  { lat: -34.6037, lng: -58.3816, size: 1, city: "ABCD City" },
  { lat: 35.6895, lng: 139.6917, size: 1, city: "ABCD City" },
  { lat: 28.6139, lng: 77.209, size: 1, city: "ABCD City" },
  { lat: 19.076, lng: 72.8777, size: 1, city: "ABCD City" },
  { lat: 12.9716, lng: 77.5946, size: 1, city: "ABCD City" },
  { lat: 13.0827, lng: 80.2707, size: 1, city: "ABCD City" },
  { lat: 17.385, lng: 78.4867, size: 1, city: "ABCD City" },
  { lat: 22.5726, lng: 88.3639, size: 1, city: "ABCD City" },
  { lat: 26.9124, lng: 75.7873, size: 1, city: "ABCD City" },
  { lat: 18.5204, lng: 73.8567, size: 1, city: "ABCD City" },
  { lat: 11.0168, lng: 76.9558, size: 1, city: "ABCD City" },
  { lat: 30.7333, lng: 76.7794, size: 1, city: " City" },

  // Add more marker data here...
];

function GlobeComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (state === "unloaded") {
      setPlaces(markerData); // Use only the marker data
      dispatch({ type: "load" });
    }
  }, [state]);

  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 10000; i++) {
      markers.push({
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80,
        },
      });
    }
  };

  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={places.slice(0, 20000)}
        pointColor={() => "#FFFF00"}
        pointAltitude={0.01}
        pointLabel={"city"}
        pointRadius="size"
      />
    </>
  );
}

export default GlobeComponent;
