// Dynamic Website Builder
// Function to create new HTML Element

function createCard(imgSrc, title, desc, dur, channelName, views, releasedTime) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <div class="img">
        <img src="${imgSrc}" alt="Thumbnail" class="thumbnail">
        <span class="dur">${dur}</span>
    </div>
    <h3 class = "title">${title}</h3>
    <p class = "desc">${desc}</p>
    <div class = "chInfo">
        <span class="channelName">${channelName}</span>
        <span class="views">${views}</span>
        <span class="releasedTime">${releasedTime}</span>
    </div>
    `;

    document.querySelector(".container .row").appendChild(div);
}

// Data function for cards
function addCardForm() {

    // get form data
    let formImgSrc = document.getElementById("imgSrc").value;
    let formTitle = document.getElementById("title").value;
    let formDesc = document.getElementById("description").value;
    let formDur = document.getElementById("duration").value;
    let formChannelName = document.getElementById("channelName").value;
    let formViews = document.getElementById("views").value;
    let formReleasedTime = document.getElementById("releasedTime").value;
    
    // create card with form data
    // calling createCard function
    if(formImgSrc === ""){
        alert("Image source can not be empty");
        return; // exit the function if imgSrc is empty
    }

    createCard(formImgSrc, formTitle, formDesc, formDur, formChannelName, formViews, formReleasedTime);

    // Clear form fields after submission
    document.getElementById("imgSrc").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("channelName").value = "";
    document.getElementById("views").value = "";
    document.getElementById("releasedTime").value = "";

}
