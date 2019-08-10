import controlExtend from "./../../../../Utils/controlExtend";
import L from "leaflet";

export default function MyLocation(mapRef, center) {
  const opts = {
    position: "bottomright"
  };

  const handlers = {
    onClick: () => {
      mapRef.current.panTo(center);
    }
  };

  L.control.myLoc = controlExtend(
    "button",
    "My Location",
    opts,
    mapRef,
    handlers
  ).addTo(mapRef.current);
}
