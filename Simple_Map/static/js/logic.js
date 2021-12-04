// Add console.log to check to see if our code is working.
console.log("working");

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jj2773/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Simple_Map/torontoRoutes.json";


// Accessing the airport GeoJSON URL from GitHub repo
// let airportData = "https://raw.githubusercontent.com/jj2773/Mapping_Earthquakes/Mapping_GeoJSON_Points/Simple_Map/majorAirports.json";

// var jjdatatest=[]

// Grabbing our GeoJSON data.
// ex 1
// d3.json(airportData).then(function(data) {
//   console.log(data);
//   jjdatatest=data;
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data)
// .addTo(map);
// });

var layerjj=[];
var featurejj=[];

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// skill builder add labels of airport name and symb
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    //note we could have replaced the weight and color with myStyle
    weight:2,
    color:'#ffffa1',
    onEachFeature: function(feature, layer) {
      featurejj=feature
      layerjj=layer
      console.log(layer)
      console.log(feature)
      // layer.bindPopup("<h2>" + feature.properties.faa + "</h2> <hr> <h3> Airport Name: " + feature.properties.name+ "</h3>");
      }
}).addTo(map);
});




// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
//example 1 plots a market at the airport coordinates
// L.geoJSON(sanFranAirport).addTo(map);

//For the pointToLayer callback function, the basic syntax for adding functionality to a marker is as follows:
//example 2 plots marker on each feature
// L.geoJson(sanFranAirport, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng);
//    }
// }).addTo(map);


//example 3 plots each feature
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng);
//   }
//   }).addTo(map);

  //example 4 plots each feature with Popup
  // L.geoJSON(sanFranAirport, {
  //   // We turn each feature into a marker on the map.
  //   pointToLayer: function(feature, latlng) {
  //     console.log(feature);
  //     return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>")
  //   }
  //   }).addTo(map);
// var layerjj=[]
// var featurejj=[]

  //example 5 on each feature with Popup allows for adding properties of the object
  //features are passed into the feature variable while properties are pasted in the layer variable
//   L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//       featurejj=feature
//       layerjj=layer
//       console.log(layer)
//       console.log(feature)
//       layer.bindPopup("<h2>" + feature.properties.faa + "</h2> <hr> <h3> Airport Name: " + feature.properties.name+ "</h3>");
//       }
// }).addTo(map);


// preparing airline route info for LAX to SFO
// it requires gps coordinates as an array to draw the lines on the map
// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// let cityData=cities;

// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

//Single Point marker
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);


//  Add a circle marker to the map for Los Angeles, California.
// approach 1 
// measures circle in meters
// var circle = L.circle([34.0522,-118.2437], {
//   color: 'black',
//   fillColor: '#ffffa1',
//   fillOpacity: 0.5,
//   radius: 300
// }).addTo(map);

// //approach 2
// measures the circle in pixels 
// L.circleMarker([34.0522, -118.2437],{
// radius:300,
// color: 'black',
// fillColor: '#ffffa1'
// }).addTo(map);

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps= {
  Street: light,
  Dark: dark
}

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    44, -80
  ],
  zoom: 2,
  layers:[light]
});

//pass map layers into our layer control
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11