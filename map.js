// map.js

// marker.js


//Stadia.AlidadeSatellite

document.addEventListener('DOMContentLoaded', function() {

    const startView = [45.44, 12.328530997029798];  
    const ThermaeCoords = [45.4385694584785, 12.328530997029798];
    const CampoManinCoords = [45.43517430406879, 12.334223030250168]; // Approx. GC location
    const startZoom = 14

    // 1. Initialize the map
    const map = L.map('map').setView(startView, startZoom); // Centered on NYC, zoom level 13

// var myIcon = L.icon({
//     iconUrl: 'pin.png',
//     shadowUrl: 'leaf-shadow.png',

//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 90], // size of the shadow
//     iconAnchor:   [22, 95], // point of the icon which will correspond to marker's location
//     shadowAnchor: [22, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
        
    
    
    Esri_WorldImagery.addTo(map); // Add the tile layer to our map instance;

    // console.log("Map initialized.");

    // const ThermaeMarker = L.marker(ThermaeCoords,{icon: myIcon}).addTo(map);
    // const CampoManinMarker = L.marker(CampoManinCoords,{icon: myIcon}).addTo(map);
    const ThermaeMarker = L.marker(ThermaeCoords).addTo(map);
    const CampoManinMarker = L.marker(CampoManinCoords).addTo(map);


    ThermaeMarker.bindPopup("Location of the Aldine Press from 1496 to 1509.<br/> <img src = 'thermae.png'/>");
    CampoManinMarker.bindPopup("Location of the Aldine Press from 1509 up until the death of Aldus Manutius.<br/> <img src = 'campomanin.png'/>");



    $("#Thermae").click(function(){
        map = map.setView(ThermaeCoords, 18);
        });

    $("#CampoManin").click(function(){
        map = map.setView(CampoManinCoords, 18); 

    });


    $("#Reset").click(function(){
        map = map.setView(startView, startZoom);

    });

    }); // End DOMContentLoaded listener

