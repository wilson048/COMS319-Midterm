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


        if (lButtonElement.id == "Wallace") {
            for (var j = 0; j < jsonData.wallace_floor_dropdown.length; j++) {
                var element = document.createElement("li");
                var buttonelement = document.createElement("a");
                buttonelement.className = "dropdown-item";
                buttonelement.id = jsonData.wallace_floor_dropdown[j].text;
                buttonelement.innerText = jsonData.wallace_floor_dropdown[j].text;
                buttonelement.addEventListener("click", function () {
                    placeFloorplanDataWallace(this.id, jsonData);
                })
                element.appendChild(buttonelement);
                floorDropdown.appendChild(element);
            }
        }
        else if (lButtonElement.id == "Wilson") {

        }
        else if (lButtonElement.id == "Commons") {

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
    var link = document.createElement("a");
    var isSelected = false;
    switch (text) {
        case "1st Floor":
            // placeData(0,pElement,imgElement,h1Element,link,isSelected);
            h1Element.innerText = jsonData.wallace_floor_dropdown[0].text;
            pElement.innerText = jsonData.wallace_floor_dropdown[0].hall;
            imgElement.src = jsonData.wallace_floor_dropdown[0].img;
            link.href = jsonData.wallace_floor_dropdown[0].href;
            isSelected = true;
            break;
        case "2nd Floor":
            placeData(1, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "3rd Floor":
            placeData(2, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "4th Floor":
            placeData(3, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "5th Floor":
            placeData(4, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "6th Floor":
            placeData(5, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "7th Floor":
            placeData(6, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "8th Floor":
            placeData(7, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "9th Floor":
            placeData(8, pElement, imgElement, h1Element, link, isSelected);
            break;
        case "10th Floor":
            placeData(9, pElement, imgElement, h1Element, link, isSelected);
            break;
        default:
            break;
    }
    if (isSelected) {
        buildingDiv.appendChild(h1Element);
        buildingDiv.appendChild(pElement);
        buildingDiv.appendChild(imgElement);
    }
}

function placeData(i, pElement, imgElement, h1Element, link, isSelected) {
    h1Element.innerText = jsonData.wallace_floor_dropdown[i].text;
    pElement.innerText = jsonData.wallace_floor_dropdown[i].hall;
    imgElement.src = jsonData.wallace_floor_dropdown[i].img;
    link.href = jsonData.wallace_floor_dropdown[i].href;
    isSelected = true;
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

