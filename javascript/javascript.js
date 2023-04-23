// Initialize and add the map
let map;

async function initMap() {
  // The location of kaplan
  const kaplanLatLng = { lat: 41.8369733, lng: -87.6282752};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at kaplan
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at kaplan
  const marker = new AdvancedMarkerView({
    map: map,
    kaplanLatLng: kaplanLatLng,
    title: "Chicago",
  });
}

initMap();
// The location of Uluru
const kaplanLatLng = { lat: 41.8369733, lng: -87.6282752};
// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

// The map, centered at Uluru
map = new Map(document.getElementById("map"), {
  zoom: 4,
  center: kaplanLatLng,
  mapId: "DEMO_MAP_ID",
});
