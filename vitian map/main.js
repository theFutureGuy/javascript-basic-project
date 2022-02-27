let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.9734, lng: 79.1369 },//vit lat-long
    zoom: 13,
  });
}
