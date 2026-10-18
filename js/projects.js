const params = new URLSearchParams(window.location.search);
const projectName = params.get("project");




function genLinkButton(name, icoName, url) {
    const button = document.createElement("a");
    button.className = "overflow-hidden flex items-center hover:border-dark-brown hover:text-dark-brown text-light-brown border-light-brown border-5 w-full h-15 transition-[color,border-color]  rounded-xl";
    button.href = url;

    const icon = document.createElement("div");
    icon.className = `w-9 h-9 ml-2 bg-current [mask-image:url('./icons/${icoName}.svg')]
        [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

    const txt = document.createElement("p");
    txt.className = "text-[1.75rem] ml-2 text-current";
    txt.textContent = name;

    button.append(icon);
    button.append(txt);

    return button
}

function genTechButton(tech) {
    const button = document.createElement("a");
    button.className = "overflow-hidden flex items-center hover:border-dark-brown hover:text-dark-brown text-light-brown border-light-brown border-5 w-full h-15 transition-[color,border-color]  rounded-xl";
    button.href = techs[tech].url;

    const icon = document.createElement("div");
    icon.className = `w-9 h-9 ml-2 bg-current [mask-image:url('./icons/${techs[tech].icon}.svg')]
        [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

    const txt = document.createElement("p");
    txt.className = "text-[1.75rem] ml-2 text-current";
    txt.textContent = techs[tech].name;

    button.append(icon);
    button.append(txt);

    return button
}

const linksHolder = document.querySelector("#links-holder");
const techHolder = document.querySelector("#tech-holder");

projectsReady.then(() => {
    const currentProj = getProj(projectName);

    const projectsTitle = document.querySelector("#proj-title");
    projectsTitle.textContent = projectName

    const projectDesc = document.querySelector("#project-desc");
    projectDesc.textContent = currentProj.longDesc

    const projectsDate = document.querySelector("#proj-date");
    projectsDate.textContent =  "Created ".concat(currentProj.date);

    const thumbnailHolder = document.querySelector("#thumbnail-holder");


    const newImg = document.createElement("img")
    newImg.className = "rounded-xl outline-4 outline-brown w-full block";
    newImg.src = "images/projects/".concat(currentProj.img);

    thumbnailHolder.append(newImg)


    if (currentProj.repoUrl) {
        linksHolder.append(genLinkButton("Repository", "github", currentProj.repoUrl));
    }

    if (currentProj.hackatimeUrl) {
        linksHolder.append(genLinkButton("Hackatime", "hackclub", currentProj.hackatimeUrl));
    }

    if (currentProj.demoUrl) {
        linksHolder.append(genLinkButton("Demo", "demo", currentProj.demoUrl));
    }

    for (const tech of currentProj.techStack) {
        techHolder.append(genTechButton(tech));
    }
    
})

