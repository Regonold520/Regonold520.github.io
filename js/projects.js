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
const galleryHolder = document.querySelector("#gallery-holder");

projectsReady.then(() => {
    const currentProj = getProj(projectName);

    const projectsTitle = document.querySelector("#proj-title");
    projectsTitle.textContent = projectName

   

    if (currentProj.hackatimeName) {
        const projectsHours = document.querySelector("#proj-hours");
        getProjTime(currentProj.hackatimeName).then(t => projectsHours.textContent = t.concat(" Time spent coding"))
    } 

    if (currentProj.mainProj == true) {
        const topBar = document.querySelector("#top-bar");

        const newHolder = document.createElement("div");
        newHolder.className = "flex overflow-hidden items-center gap-3 w-50 h-10  rounded-2xl outline outline-5 text-[#ffd467] outline-[#ffd467]";

        const icon = document.createElement("div");
        icon.className = `w-7 h-7 ml-2 bg-current [mask-image:url('./icons/star.svg')]
                [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

        const newTxt = document.createElement("p");
        newTxt.className = "py-1 text-nowrap text-[1.5rem] text-current";
        newTxt.textContent = "Main Project";

        newHolder.append(icon);
        newHolder.append(newTxt);

        topBar.append(newHolder);
    }

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

    for (const img of currentProj.images) {
        const newEntry = document.createElement("img");
        newEntry.className = "w-full mb-4 break-inside-avoid outline outline-brown outline-5 rounded-2xl";
        newEntry.src = `images/projects/${projectName}/${img}.png`;

        galleryHolder.append(newEntry);
    }
    
})

