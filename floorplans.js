fetch('data.json')
    .then(response => response.json())
    .then(data => placeDropdownData(data));

function placeDropdownData(jsonData) {
    // Build Dropdown menu for buildings
    buildingDropdown = document.getElementById("Building-Dropdown");
    floorDropdown = document.getElementById("Floor-Dropdown");
    for (var i = 0; i < jsonData.building_dropdown.length; i++) {
        var lElement = document.createElement("li");
        var lButtonElement = document.createElement("a");
        lButtonElement.className = "dropdown-item";
        lButtonElement.id = jsonData.building_dropdown[i].text;
        lButtonElement.innerText = jsonData.building_dropdown[i].text;
        lButtonElement.addEventListener("click", function () {
            placeBuildingData(this.id, jsonData);
        })
        // lElement.innerHTML = `<a class="dropdown-item" href="#">${}</a>`;
        lElement.appendChild(lButtonElement);
        buildingDropdown.appendChild(lElement);
        if (lButtonElement.id = "Wallace") {
            for (var j = 0; j < jsonData.wallace_floor_dropdown.length; j++) {
                var element = document.createElement("li");
                var buttonelement = document.createElement("a");
                buttonelement.className = "dropdown-item";
                buttonelement.id = jsonData.wallace_floor_dropdown[j].text;
                buttonelement.innerText = jsonData.wallace_floor_dropdown[j].text;
                buttonelement.addEventListener("click", function () {
                    placeFloorplanDataWallace(this.id, jsonData);
                })
            }
        }
        else if (lButtonElement.id = "Wilson") {

        }
        else if (lButtonElement.id = "Commons") {

        }
        else {

        }
    }
}

function placeFloorplanDataWallace(text, jsonData) {
    var floorDiv = document.getElementById("Floor");
    floorDiv.innerHTML = "";
    var h1Element = document.createElement("h1");
    var pElement = document.createElement("p");
    var imgElement = document.createElement("img");
    var isSelected = false;
    switch (text) {
        case "1st Floor":
            break;
        case "2nd Floor":
            break;
        case "3rd Floor":
            break;
        case "4th Floor":
            break;
        case "5th Floor":
            break;
        case "6th Floor":
            break;
        case "7th Floor":
            break;
        case "8th Floor":
            break;
        case "9th Floor":
            break;
        case "10th Floor":
            break;

    }
}


function placeBuildingData(text, jsonData) {
    var buildingDiv = document.getElementById("Building");
    buildingDiv.innerHTML = '';
    var h1Element = document.createElement("h1");
    var pElement = document.createElement("p");
    var imgElement = document.createElement("img");
    var isSelected = false;
    // Cases for changing Images 
    switch (text) {
        // Wallace
        case "Wallace":
            h1Element.innerText = jsonData.building_dropdown[0].text;
            pElement.innerText = jsonData.building_dropdown[0].address;
            imgElement.src = jsonData.building_dropdown[0].img;
            isSelected = true;
            break;
        // Wilson
        case "Wilson":
            h1Element.innerText = jsonData.building_dropdown[1].text;
            pElement.innerText = jsonData.building_dropdown[1].address;
            imgElement.src = jsonData.building_dropdown[1].img;
            isSelected = true;
            break;
        // Commons
        case "Commons":
            h1Element.innerText = jsonData.building_dropdown[2].text;
            pElement.innerText = jsonData.building_dropdown[2].address;
            imgElement.src = jsonData.building_dropdown[2].img;
            isSelected = true;
            break;
        default:
            break;
    }
    // Load Data into div element if a button is selected
    if (isSelected) {
        buildingDiv.appendChild(h1Element);
        buildingDiv.appendChild(pElement);
        buildingDiv.appendChild(imgElement);
    }
    // <!-- <h1>Wallace</h1>
    // <p>917 Welch Ave, Ames IA</p>
    // <img src="images/night towers photo.jpg"> -->
}

