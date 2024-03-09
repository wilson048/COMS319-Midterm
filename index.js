let recentCarousel = document.getElementById("Recent-Carousel");
recentCarousel.innerHTML = 
  `<div class="carousel-indicators">
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#Recent-Carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id = "Recent-1-img" class class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div id = "Recent-1" class="carousel-caption text-start">
          
        </div>
      </div>
      <div  = "container"> 

      </div>
    </div>
    <div class="carousel-item">
      <img id = "Recent-2-img" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div id = "Recent-2" class="carousel-caption text-start">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img id = "Recent-3-img" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div id = "Recent-3" class="carousel-caption text-start">
          
        </div>
      </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button"  data-bs-target="#Recent-Carousel" data-bs-slide="prev">
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
      <img id = "History-1-img" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div id = "History-1" class="carousel-caption text-end">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img id = "History-2-img" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
      <div class="container">
        <div id = "History-2" class="carousel-caption text-end">
          
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img id = "History-3-img" class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
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
      hRecentElement.style = `text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`;
      pRecentElementOne.innerText = jsonData.index_recent_data[i].subtext;
      pRecentElementOne.style = `text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`;
      pRecentElementTwo.innerHTML = `<a class="btn btn-lg btn-primary" href="${jsonData.index_recent_data[i].href}">${jsonData.index_recent_data[i].btntext}</a>`
      // Append elements to parent element
      recentElement.appendChild(hRecentElement);
      recentElement.appendChild(pRecentElementOne);
      recentElement.appendChild(pRecentElementTwo);

      var imgElement = document.getElementById("Recent-" + (i + 1) + "-img");
      imgElement.src = jsonData.index_recent_data[i].img;
      
      // Second Carousel, featuring historic information 
      // Get parent element + create 3 new elements
      var historyElement = document.getElementById("History-" + (i + 1));
      var hHistoryElement = document.createElement("h1");
      var pHistoryElementOne = document.createElement("p");
      var pHistoryElementTwo = document.createElement("p");
      // Populate elements with data from data.json
      hHistoryElement.innerText = jsonData.index_history_data[i].text;
      hHistoryElement.style = `text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`;
      pHistoryElementOne.style = `text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;`;
      var historyImgElement = document.getElementById("History-" + (i + 1) + "-img")
      historyImgElement.src = jsonData.index_history_data[i].img;
      
      pHistoryElementOne.innerText = jsonData.index_history_data[i].subtext;
      pHistoryElementTwo.innerHTML = `<a class="btn btn-lg btn-primary" href="${jsonData.index_history_data[i].href}">${jsonData.index_history_data[i].btntext}</a>`
      // Append elements to parent element
      historyElement.appendChild(hHistoryElement);
      historyElement.appendChild(pHistoryElementOne);
      historyElement.appendChild(pHistoryElementTwo);
  }

  // Featured Page Data
  var featuredElement = document.getElementById("featured-page");
  var h2FeaturedElement = document.createElement("h2");
  var pFeaturedElement = document.createElement("p");
  
  h2FeaturedElement.className = "featurette-heading fw-normal lh-1";
  h2FeaturedElement.innerText = jsonData.featured_page.text;
  pFeaturedElement.className = "lead";
  pFeaturedElement.innerText = jsonData.featured_page.subtext;
  
  featuredElement.appendChild(h2FeaturedElement);
  featuredElement.appendChild(pFeaturedElement);
  // featured Page Image Data
  var featuredImgElement = document.getElementById("featured-page-img");
  var featuredImg = document.createElement("img");
  featuredImg.src = jsonData.featured_page.img;
  featuredImg.className = "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto";
  featuredImg.width = 500;
  featuredImg.height = 500;
  featuredImg.xmlns = "http://www.w3.org/2000/svg";
  featuredImg.role = "img";
  featuredImg.preserveAspectRatio = "xMidYMid slice";
  featuredImg.focusable = "false";

  featuredImgElement.appendChild(featuredImg);
  // Updated Page
  var updateElement = document.getElementById("update-page");
  var h2UpdateElement = document.createElement("h2");
  var pUpdateElement = document.createElement("p");
  
  h2UpdateElement.className = "featurette-heading fw-normal lh-1";
  h2UpdateElement.innerText = jsonData.update_page.text;
  pUpdateElement.className = "lead";
  pUpdateElement.innerText = jsonData.update_page.subtext;
  
  updateElement.appendChild(h2UpdateElement);
  updateElement.appendChild(pUpdateElement);
  // update page Image data
  var updateImgElement = document.getElementById("update-page-img");
  var updateImg = document.createElement("img");
  updateImg.src = jsonData.update_page.img;
  updateImg.className = "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto";
  updateImg.width = 500;
  updateImg.height = 500;
  updateImg.xmlns = "http://www.w3.org/2000/svg";
  updateImg.role = "img";
  updateImg.preserveAspectRatio = "xMidYMid slice";
  updateImg.focusable = "false";

  updateImgElement.appendChild(updateImg);
}
