const map=L.map('map', {
    crs:L.CRS.Simple,
    minZoom:-1,
    maxZoom:2
});
const bounds=[[0,0],[960,620]];
L.imageOverlay('assets/mymap.png',bounds, {
    interactive:true
}).addTo(map);
map.fitBounds(bounds);
const markers=[
[48.86091,2.3364]
[48.860,2.3332]
[48.8607,2.3397]
];
markers.forEach((coord,i) => {
    L.marker(coord).addTo(map).bindPopup('Маркер ${i+1}');
});