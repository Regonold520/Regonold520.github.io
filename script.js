

const projects = [
    {
        name: "Inflerna",
        date: "Feb - 2026",
        desc: `A game based around "Dante's Inferno" where the player has to descend into the inferno with carefully built flowers to quell the layers of hell, made in LOVE2D`,
        img: "InflernaThumb.png",
        repoUrl: "https://github.com/Regonold520/Inflerna",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/Inflerna", 
        demoUrl: "https://github.com/Regonold520/Inflerna/releases/tag/v0.0.2"
    },
    {
        name: "RegosPattern",
        date: "Aug - 2026",
        desc: `A program made for Hackclub's "Greeble" event which has the purpose of generating a cool pattern dependent on the result of a bunch of sliders.`,
        img: "PatternThumb.png",
        repoUrl: "https://github.com/Regonold520/RegosPattern",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/RegosPattern",
        demoUrl: "https://github.com/Regonold520/RegosPattern/releases/tag/1"
    },
    {
        name: "LoveSprite",
        date: "Jan - 2026",
        desc: `A recreation of Aseprite in the LOVE2D lua framework, with very minimal features but was mainly made to test the extents of LOVE.`,
        img: "SpriteThumb.png",
        repoUrl: "https://github.com/Regonold520/LoveSprite",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/ImageTesting",
        demoUrl: "https://github.com/Regonold520/LoveSprite/releases/tag/Build2"
    },
    {
        name: "ADORE",
        date: "Dec - 2025",
        desc: `A library for the LOVE2D game framework, intended to help users to create games in a more orderly and organised fashion, it provides many utility features like, sprite caching, camera handling and advanced object drawing`,
        img: "AdoreThumb.png",
        repoUrl: "https://github.com/Regonold520/ADORE-RECODE",
        hackatimeUrl: "https://hackatime.hackclub.com/my/projects/ADORE",
        demoUrl: "https://github.com/Regonold520/ADORE-RECODE/releases/tag/v.1.0.0"
    }
];

const projectsHolder = document.querySelector("#projects-holder");

function createButton(name, proj, width) {
    const url = proj[name.toLowerCase().concat("Url")]

    const button = document.createElement("a")
    button.href = url
    button.className = `flex justify-center mx-auto w-${width} h-10 hover:w-full rounded-2xl outline outline-5 hover:text-light-brown hover:outline-light-brown text-dark-brown outline-dark-brown transition-[width,color,border-color]`;
    const txt = document.createElement("p")
    txt.textContent = name
    txt.className = "text-nowrap text-[1.75rem] text-current";
    button.append(txt)

    return button
}

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

        if (proj.repoUrl) {
            const button = createButton("Repo", proj, 40)
            buttonHolder.append(button)
        }
        
        if (proj.hackatimeUrl) {
            const button = createButton("Hackatime", proj, 60)
            buttonHolder.append(button)
        }

        if (proj.demoUrl) {
            const button = createButton("Demo", proj, 40)
            buttonHolder.append(button)
        }

        card.append(buttonHolder)

        projectsHolder.append(card)
    }
}

genProjectCards();