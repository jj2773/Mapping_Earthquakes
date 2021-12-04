
var layerjj=[];
var featurejj=[];

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// skill builder add labels of airport name and symb
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     //note we could have replaced the weight and color with myStyle
//     weight:2,
//     color:'blue',
//     onEachFeature: function(feature, layer) {
//       featurejj=feature
//       layerjj=layer
//       console.log(layer)
//       console.log(feature)
//       layer.bindPopup("<h2>" + feature.properties.AREA_S_CD + "</h2> <hr> <h3> Area Name: " + feature.properties.AREA_NAME+ "</h3>");
//       }
// }).addTo(map);
// });


// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps= {
  Streets: street,
  Satellite: satelliteStreets
}

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    39.5, -98.5
  ],
  zoom: 3,
  layers:[street]
});

//pass map layers into our layer control
L.control.layers(baseMaps).addTo(map);
