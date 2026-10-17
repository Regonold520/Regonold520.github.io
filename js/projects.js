const params = new URLSearchParams(window.location.search);
const projectName = params.get("project");

const currentProj = getProj(projectName);

console.log(currentProj)

const projectsTitle = document.querySelector("#proj-title");
projectsTitle.textContent = projectName

const projectsDate = document.querySelector("#proj-date");
projectsDate.textContent =  "Created ".concat(currentProj.date);

const thumbnailHolder = document.querySelector("#thumbnail-holder");


const newImg = document.createElement("img")
newImg.className = "rounded-xl outline-4 outline-brown w-170 ";
newImg.src = "images/projects/".concat(currentProj.img);

thumbnailHolder.append(newImg)