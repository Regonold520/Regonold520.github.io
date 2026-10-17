const params = new URLSearchParams(window.location.search);
const projectName = params.get("project");

const currentProj = getProj(projectName);

console.log(currentProj)

const projectsTitle = document.querySelector("#proj-title");
projectsTitle.textContent = projectName

const newImg = document.createElement("img")
newImg.className = "rounded-xl outline-4 outline-brown";
newImg.src = currentProj.img;

projectsTitle.append(newImg)