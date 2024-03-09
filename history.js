fetch('data.json')
    .then(response => response.json())
    .then(data => placehistoryData(data));

function placehistoryData(jsonData) {
    var top_element = document.getElementById("headerline");
    top_element.innerText = jsonData.history_information[1].text;
    var sub_top = document.getElementById("headersub");
    sub_top.innerText = jsonData.history_information[1].subtext;
    var beatiowa = document.getElementById("beat iowah");
    beatiowa.innerText = jsonData.history_information[2].text;

    var time = document.getElementById("beat iowa time");
    time.innerText = jsonData.history_information[2].subtext;
    var iowatext = document.getElementById("iowa text");
    iowatext.innerText = jsonData.history_information[2].lowerText;

    var iowaimage = document.getElementById("beatiowaimage");
    iowaimage.src = jsonData.history_information[2].img;

    var tallimg = document.getElementById("talltowerimg");
    tallimg.src = jsonData.history_information[0].img;

    var towermid = document.getElementById("midtexttower");
    towermid.innerText = jsonData.history_information[0].lowerText;

    var datetower = document.getElementById("datetower");
    datetower.innerText = jsonData.history_information[0].subtext;

    var towerheader = document.getElementById("tower header");
    towerheader.innerText = jsonData.history_information[0].subtext;

    var video = document.getElementById("video");
    video.src = jsonData.history_information[4].video;

    var nighttowerheader = document.getElementById("night tower header");
    nighttowerheader.innerText = jsonData.history_information[3].text;

    var nightdate = document.getElementById("nightdatetower");
    nightdate.innerText = jsonData.history_information[3].subtext;

    var nighttext = document.getElementById("nightmidtexttower");
    nighttext.innerText = jsonData.history_information[3].lowerText;

    var nightimg = document.getElementById("nighttowerimg");
    nightimg.src = jsonData.history_information[3].img;
}