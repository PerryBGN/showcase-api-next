
"use client";
import { useEffect } from "react";

const MapsComponent = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAaLnlrG-7CiomQ_mc7Ym9PQU32mD74Aro`;
      script.async = true;
      script.onload = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      };
      script.onerror = () => {
        console.error("Error loading Google Maps script.");
      };
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMaps();
    } else {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  }, []);

  return (
    <div>
      <h1>Google Maps</h1>
      <div id="map" style={{ width: "400px", height: "300px" }}></div>
    </div>
  );
};

export default MapsComponent;
