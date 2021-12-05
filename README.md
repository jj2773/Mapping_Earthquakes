# Mapping_Earthquakes
GEOJSON, HTML, JavaScript, D3, Mapbox, and Leaflet.js are used for earthquake mapping of USGS data.  Tectonic plate data is also mapped using a GitHub JSON repository.  

Key components are the:
D3 library which is referenced by Java script and allows reading of the JSON data.
Leafletjs tools allowing plotting of the data
Mapbox API to provide the latest maps to plot our data onto

In this application Leaflet is leveraged to allow three layers of base maps: street, satellite, and "light" map.  There are overlay maps allowing toggling of all earthquakes, tectonic plates, and major earthquakes.  It is important to note that the Leaflet tools are reading standardized GEOJSON formats enabling efficient coding with such functions as onEachFeature.


