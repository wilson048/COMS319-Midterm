let recentCarousel = document.getElementById("Recent-Carousel");
recentCarousel.innerHTML = 
  `<div class="carousel-indicators">
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "Recent-1" class="carousel-caption text-start">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "Recent-2" class="carousel-caption text-start">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "Recent-3" class="carousel-caption text-start">
          
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Recent-Carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Recent-Carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`

let historyCarousel = document.getElementById("History-Carousel");
historyCarousel.innerHTML = 
  `<div class="carousel-indicators">
    <button type="button" data-bs-target="#History-Carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#History-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#History-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "History-1" class="carousel-caption text-end">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "History-2" class="carousel-caption text-end">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div id = "History-3" class="carousel-caption text-end">
          
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#History-Carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#History-Carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`

fetch('data.json')
    .then(response => response.json())
    .then(data => placeIndexData(data));

function placeIndexData(jsonData) {
  // Top of Screen data
  // Get parent and create children elements
  var top_element = document.getElementById("top-of-page");
  var h2TopElement = document.createElement("h2");
  var pTopElement = document.createElement("p");
  // Populate Elements
  h2TopElement.className = "featurette-heading fw-normal lh-1";
  h2TopElement.innerText = jsonData.top_page.text;
  pTopElement.className = "lead";
  pTopElement.innerText = jsonData.top_page.subtext;
  // Append to parent
  top_element.appendChild(h2TopElement);
  top_element.appendChild(pTopElement);
  // IFrame for top of screen
  // Get parent and create children elements
  var top_iframe_element = document.getElementById("iframe");
  var iFrameTop = document.createElement("iframe");
  // Add HTML properties
  iFrameTop.src = jsonData.top_page.iframe_link;
  iFrameTop.width = 500;
  iFrameTop.height = 500;
  iFrameTop.style = `border:0;`;
  iFrameTop.xmlns = "http://www.w3.org/2000/svg";
  // Append to parent
  top_iframe_element.appendChild(iFrameTop);

  // Carousel Data
  for(var i = 0; i < jsonData.index_recent_data.length; i++) {
      // First Carousel, featuring recent information 
      // Get parent element + create 3 new elements
      var recentElement = document.getElementById("Recent-" + (i + 1));
      var hRecentElement = document.createElement("h1");
      var pRecentElementOne = document.createElement("p");
      var pRecentElementTwo = document.createElement("p");
      // Populate elements with data from data.json
      hRecentElement.innerText = jsonData.index_recent_data[i].text;
      pRecentElementOne.innerText = jsonData.index_recent_data[i].subtext;
      pRecentElementTwo.innerHTML = `<a class="btn btn-lg btn-primary" href="#">${jsonData.index_recent_data[i].btntext}</a>`
      // Append elements to parent element
      recentElement.appendChild(hRecentElement);
      recentElement.appendChild(pRecentElementOne);
      recentElement.appendChild(pRecentElementTwo);
      // Second Carousel, featuring historic information 
      // Get parent element + create 3 new elements
      var historyElement = document.getElementById("History-" + (i + 1));
      var hHistoryElement = document.createElement("h1");
      var pHistoryElementOne = document.createElement("p");
      var pHistoryElementTwo = document.createElement("p");
      // Populate elements with data from data.json
      hHistoryElement.innerText = jsonData.index_history_data[i].text;
      pHistoryElementOne.innerText = jsonData.index_history_data[i].subtext;
      pHistoryElementTwo.innerHTML = `<a class="btn btn-lg btn-primary" href="#">${jsonData.index_history_data[i].btntext}</a>`
      // Append elements to parent element
      historyElement.appendChild(hHistoryElement);
      historyElement.appendChild(pHistoryElementOne);
      historyElement.appendChild(pHistoryElementTwo);
  }

  // Bottom Page Data
  var bottomElement = document.getElementById("bottom-page");
  var h2BottomElement = document.createElement("h2");
  var pBottomElement = document.createElement("p");
  
  h2BottomElement.className = "featurette-heading fw-normal lh-1";
  h2BottomElement.innerText = jsonData.bottom_page.text;
  pBottomElement.className = "lead";
  pBottomElement.innerText = jsonData.bottom_page.subtext;
  
  bottomElement.append(h2BottomElement);
  bottomElement.append(pBottomElement);
  // Bottom Page Image Data
  var bottomImgElement = document.getElementById("bottom-page-img");
  var bottomImg = document.createElement("img");
  bottomImg.src = jsonData.bottom_page.img;
  bottomImg.className = "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto";
  bottomImg.width = 500;
  bottomImg.height = 500;
  bottomImg.xmlns = "http://www.w3.org/2000/svg";
  bottomImg.role = "img";
  bottomImg.preserveAspectRatio = "xMidYMid slice";
  bottomImg.focusable = "false";

  bottomImgElement.appendChild(bottomImg);
}
