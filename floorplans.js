fetch('data.json')
    .then(response => response.json())
    .then(data => placeFloorplanData(data));
let floorData = [];
let hallData = [];
function placeFloorplanData(jsonData) {
    buildingDropdown = document.getElementById("Building-Dropdown");
    for(var i = 0; i < jsonData.building_dropdown.length; i++) {
        var lelement = document.createElement("li");
        lelement.innerHTML = `<a class="dropdown-item" href="#">Action</a>`;
        buildingDropdown.appendChild(lelement);
    }
    
}
