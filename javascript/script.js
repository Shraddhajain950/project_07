let map; 

const kaplanLatLong = {lat: 41.83711715348835, lng: -87.62830738921376}; 
function initMap() {
  const kaplanLatLong = { lat: 41.83711715348835, lng: -87.62830738921376}; 
  map = new google.maps.Map(document.getElementById("map"), 
  {center: kaplanLatLong,  zoom: 5,}); } 