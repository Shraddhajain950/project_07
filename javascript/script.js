let map; 

const kaplanLatLong = {lat: 41.83711715348835, lng: -87.62830738921376};
const IIT_Tower = {lat:41.831617715598576,lng: -87.62721510868744 }
function initMap() {
  const kaplanLatLong = { lat: 41.83711715348835, lng: -87.62830738921376}; 
  map = new google.maps.Map(document.getElementById("map"), 
  {center: kaplanLatLong,  zoom: 12,}); 
  const marker= new google.maps.Marker ({
   position: kaplanLatLong,
  map:map,});
} 
function AddMarkerToKaplan(){
  const marker = new google.maps.Marker({
    position: IIT_Tower,
	map:map,
  });


const georssLayer = new google.maps.KmlLayer({
    url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
  });

  georssLayer.setMap(map);
  
}






