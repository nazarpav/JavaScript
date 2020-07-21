let Pointer;
let map = L.map('MAP');
let mapInput = document.getElementById('Location');
let icon = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/25/62/aa/2562aacd1a4c2af60cce9629b1e05cf2.png',
    iconSize: [40, 40],
    iconAnchor: [40, 40]
});
IMask(document.getElementById('Phone'), {
    mask: '+{38}(000)000-00-00'
});

map.setView([50.6187155579202, 26.259309053421024], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);



map.on('click', function(e) {
    SetPointer(e.latlng.lat, e.latlng.lng);
    mapInput.value = `${e.latlng.lat} ${e.latlng.lng}`
});


function SetPointer(lat = 0, lng = 0) {
    if (Pointer !== null && Pointer !== undefined) {
        Pointer.remove();
    }

    Pointer = new L.marker(new L.LatLng(lat, lng), {
        icon: icon
    });
    Pointer.update();
    map.addLayer(Pointer);
}