

const projects = [
    {
        name: "Inflerna",
        date: "Feb - 2026",
        desc: "Suppers",
        img: "InflernaThumb.png",
        repoUrl: "https://github.com/Regonold520/Inflerna",
        demoUrl: "https://github.com/Regonold520/Inflerna/releases/tag/v0.0.2"
    },
    {
        name: "RegosPattern",
        date: "Aug - 2026",
        desc: "Suppers but 2",
        repoUrl: "https://github.com/Regonold520/RegosPattern",
        demoUrl: "https://github.com/Regonold520/RegosPattern/releases/tag/1"
    }
];

const projectsHolder = document.querySelector("#projects-holder");

function genProjectCards() {
    for (const proj of projects) {
        const card = document.createElement("div")

        card.className = "flex flex-col justify-center outline outline-light-brown outline-5 rounded-3xl outline-dashed w-full p-3 self-start overflow-hidden";

        if (proj.img) {
            const newImg = document.createElement("img")
            newImg.className = "rounded-xl outline-4 outline-brown";
            newImg.src = proj.img

            card.append(newImg)
        }

        const titleHolder = document.createElement("div")
        titleHolder.className = "py-3 flex flex-row justify-between w-full";
        
        const titleText = document.createElement("p")
        titleText.className = "text-nowrap  text-[1.75rem] text-dark-brown";
        titleText.textContent = proj.name;

        const dateText = document.createElement("p")
        dateText.className = "text-nowrap  text-[1.75rem] text-dark-brown";
        dateText.textContent = proj.date;

        titleHolder.append(titleText)
        titleHolder.append(dateText)
        card.append(titleHolder)
        
        const desc = document.createElement("p")
        desc.textContent = proj.desc;
        desc.className = "text-[1.3rem] text-current";

        card.append(desc)

        const buttonHolder = document.createElement("div");
        buttonHolder.className = "py-3 flex flex-row justify-center gap-8 w-full";

        const repoButton = document.createElement("a")
        repoButton.href = proj.repoUrl
        repoButton.className = "flex justify-center mx-auto w-40 h-10 hover:w-full rounded-2xl outline outline-5 hover:text-light-brown hover:outline-light-brown text-dark-brown outline-dark-brown transition-[width,color,border-color]";
        const repoTxt = document.createElement("p")
        repoTxt.textContent = "Repo"
        repoTxt.className = "text-nowrap text-[1.75rem] text-current";
        repoButton.append(repoTxt)

        const demoButton = document.createElement("a")
        demoButton.href = proj.demoUrl
        demoButton.className = "flex justify-center mx-auto w-40 h-10 hover:w-full rounded-2xl outline outline-5 hover:text-light-brown hover:outline-light-brown text-dark-brown outline-dark-brown transition-[width,color,border-color]";
        const demoTxt = document.createElement("p")
        demoTxt.textContent = "Demo"
        demoTxt.className = "text-nowrap text-[1.75rem] text-current";
        demoButton.append(demoTxt)

        buttonHolder.append(repoButton)
        buttonHolder.append(demoButton)

        card.append(buttonHolder)

        projectsHolder.append(card)
    }
}

genProjectCards();