import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class CenterMap extends MapControl {
  createLeafletElement(opts) {
    const CenterMap = L.Control.extend({
      onAdd: map => {
        this.ctrButton = L.DomUtil.create("button");
        this.ctrButton.innerHTML = "set location";
        return this.ctrButton;
      }
      // onRemove: function(map) {
      //   // Nothing to do here
      // }
    });
    return new CenterMap({ position: "bottomright" });
  }
}

export default withLeaflet(CenterMap);
