console.log(mapToken);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 13 // starting zoom
});

// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//     'https://www.clipartmax.com/png/middle/207-2078968_home-icon-png-red.png',
//     (error, image) => {
//     if (error) throw error;
     
//     // Add the image to the map style.
//     map.addImage('cat', image);
     
//     // Add a data source containing one point feature.
//     map.addSource('point', {
//     'type': 'geojson',
//     'data': {
//     'type': 'FeatureCollection',
//     'features': [
//     {
//     'type': 'Feature',
//     'geometry': {
//     'type': 'Point',
//     'coordinates': listing.geometry.coordinates
//     }
//     }
//     ]
//     }
//     });
     
//     // Add a layer to use the image to represent the data.
//     map.addLayer({
//     'id': 'points',
//     'type': 'symbol',
//     'source': 'point', // reference the data source
//     'layout': {
//     'icon-image': 'cat', // reference the image
//     'icon-size': 0.25
//     }
//     });
//     }
//     );
//     });


const marker= new mapboxgl.Marker({color: "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(
    `<h4>${listing.title}</h4><p>Here is your listing</p>`
))
.addTo(map);

