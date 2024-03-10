fetch('data.json')
    .then(response => response.json())
    .then(data => placeDropdownData(data));

function placeDropdownData(jsonData) {
    // Build Dropdown menu for buildings
    buildingDropdown = document.getElementById("Building-Dropdown");
    
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
    }
}

function placeFloorplanData(text, jsonData) {
    var floorDiv = document.getElementById("Floor");
    floorDiv.innerHTML = "";
    var h1Element = document.createElement("h1");
    var pElement = document.createElement("p");
    var disclaimerElement =  document.createElement("p");
    disclaimerElement.innerText = jsonData.floor_disclaimer;
    var imgElement = document.createElement("img");
    var link = document.createElement("a");
    link.innerText = "Learn More";

    var isHall = false;
    // Set data here
    if(text.includes("Wallace")) {
        h1Element.innerText = jsonData.wallace_floor_dropdown[parseInt(text) - 1].text;
        pElement.innerText = jsonData.wallace_floor_dropdown[parseInt(text) - 1].hall;
        imgElement.src = jsonData.wallace_floor_dropdown[parseInt(text) - 1].img;
        link.href = jsonData.wallace_floor_dropdown[parseInt(text) - 1].href;
        isHall = true
    }
    // Set data here
    else if (text.includes("Wilson")) {
        h1Element.innerText = jsonData.wilson_floor_dropdown[parseInt(text) - 1].text;
        pElement.innerText = jsonData.wilson_floor_dropdown[parseInt(text) - 1].hall;
        imgElement.src = jsonData.wilson_floor_dropdown[parseInt(text) - 1].img;
        link.href = jsonData.wilson_floor_dropdown[parseInt(text) - 1].href;
        isHall = true
    }
    // Set data here
    else if (text.includes("Commons")) {
        switch (text) {
            case "Ground Floor Commons":
                h1Element.innerText = jsonData.commons_floor_dropdown[0].text;
                pElement.innerText = jsonData.commons_floor_dropdown[0].hall;
                imgElement.src = jsonData.commons_floor_dropdown[0].img;
                link.href = jsonData.commons_floor_dropdown[0].href;
                break;
            case "Basement Commons":
                h1Element.innerText = jsonData.commons_floor_dropdown[1].text;
                pElement.innerText = jsonData.commons_floor_dropdown[1].hall;
                imgElement.src = jsonData.commons_floor_dropdown[1].img;
                link.href = jsonData.commons_floor_dropdown[1].href;
                break;
        }
    }
    
    floorDiv.appendChild(h1Element);
    floorDiv.appendChild(pElement);
    // Only add if the selected building is a reseidence hall
    if(isHall) {
        floorDiv.appendChild(disclaimerElement);
    }
    floorDiv.appendChild(imgElement);
    floorDiv.appendChild(link);
}

function placeData(i, pElement, imgElement, h1Element, link, jsonData) {
    h1Element.innerText = jsonData.wallace_floor_dropdown[i].text;
    pElement.innerText = jsonData.wallace_floor_dropdown[i].hall;
    imgElement.src = jsonData.wallace_floor_dropdown[i].img;
    link.href = jsonData.wallace_floor_dropdown[i].href;
}


function placeBuildingData(text, jsonData) {
    var buildingDiv = document.getElementById("Building");
    buildingDiv.innerHTML = '';
    var h1Element = document.createElement("h1");
    var pElement = document.createElement("p");
    var imgElement = document.createElement("img");
    var isSelected = false;

    floorDropdown = document.getElementById("Floor-Dropdown");
    floorDropdown.innerHTML = '';
    // Cases for changing Images 
    switch (text) {
        // Wallace
        case "Wallace":
            h1Element.innerText = jsonData.building_dropdown[0].text;
            pElement.innerText = jsonData.building_dropdown[0].address;
            imgElement.src = jsonData.building_dropdown[0].img;
            isSelected = true;
            for (var j = 0; j < jsonData.wallace_floor_dropdown.length; j++) {
                var element = document.createElement("li");
                var buttonElement = document.createElement("a");
                buttonElement.className = "dropdown-item";
                buttonElement.id = jsonData.wallace_floor_dropdown[j].text;
                buttonElement.innerText = jsonData.wallace_floor_dropdown[j].text;
                buttonElement.addEventListener("click", function () {
                    placeFloorplanData(this.id, jsonData);
                })
                element.appendChild(buttonElement);
                floorDropdown.appendChild(element);
            }
            break;
        // Wilson
        case "Wilson":
            h1Element.innerText = jsonData.building_dropdown[1].text;
            pElement.innerText = jsonData.building_dropdown[1].address;
            imgElement.src = jsonData.building_dropdown[1].img;
            isSelected = true;
            for (var j = 0; j < jsonData.wilson_floor_dropdown.length; j++) {
                var element = document.createElement("li");
                var buttonElement = document.createElement("a");
                buttonElement.className = "dropdown-item";
                buttonElement.id = jsonData.wilson_floor_dropdown[j].text;
                buttonElement.innerText = jsonData.wilson_floor_dropdown[j].text;
                buttonElement.addEventListener("click", function () {
                    placeFloorplanData(this.id, jsonData);
                })
                element.appendChild(buttonElement);
                floorDropdown.appendChild(element);
            }
            break;
        // Commons
        case "Commons":
            h1Element.innerText = jsonData.building_dropdown[2].text;
            pElement.innerText = jsonData.building_dropdown[2].address;
            imgElement.src = jsonData.building_dropdown[2].img;
            isSelected = true;

            for (var j = 0; j < jsonData.commons_floor_dropdown.length; j++) {
                var element = document.createElement("li");
                var buttonElement = document.createElement("a");
                buttonElement.className = "dropdown-item";
                buttonElement.id = jsonData.commons_floor_dropdown[j].text;
                buttonElement.innerText = jsonData.commons_floor_dropdown[j].text;
                buttonElement.addEventListener("click", function () {
                    placeFloorplanData(this.id, jsonData);
                })
                element.appendChild(buttonElement);
                floorDropdown.appendChild(element);
            }
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

