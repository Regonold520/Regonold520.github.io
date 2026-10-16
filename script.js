

const projects = [
    {
        name: "Inflerna",
        date: "Feb - 2026",
        desc: `A game based around "Dante's Inferno" where the player has to descend into the inferno with carefully built flowers to quell the layers of hell, made in LOVE2D`,
        img: "InflernaThumb.png",
        repoUrl: "https://github.com/Regonold520/Inflerna",
        hackatimeName: "Inflerna",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/Inflerna", 
        demoUrl: "https://github.com/Regonold520/Inflerna/releases/tag/v0.0.2"
    },
    {
        name: "Anathema",
        date: "Jun - 2026",
        desc: `A game where you collect "heresites" to play a modified version of chess with an unstoppable faith engine and special faith gimmics, scored 2nd for "Jame Gam #59" Game Jam.`,
        img: "AnathemaThumb.png",
        demoUrl: "https://regonold520.itch.io/anathema"
    },
    {
        name: "Mjefgee",
        date: "Dec - 2025",
        desc: `A funny game made in a few days where you have to manage cosmic entities of desire, this game was made in Godot, purely for fun and testing out adding a lot of polish features to a project and experimented with dialogue.`,
        img: "MjefgeeThumb.png",
    },
    {
        name: "RegosPattern",
        date: "Aug - 2026",
        desc: `A program made for Hackclub's "Greeble" event which has the purpose of generating a cool pattern dependent on the result of a bunch of sliders.`,
        img: "PatternThumb.png",
        repoUrl: "https://github.com/Regonold520/RegosPattern",
        hackatimeName: "RegosPattern",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/RegosPattern",
        demoUrl: "https://github.com/Regonold520/RegosPattern/releases/tag/1"
    },
    {
        name: "LoveSprite",
        date: "Jan - 2026",
        desc: `A recreation of Aseprite in the LOVE2D lua framework, with very minimal features but was mainly made to test the extents of LOVE.`,
        img: "SpriteThumb.png",
        repoUrl: "https://github.com/Regonold520/LoveSprite",
        hackatimeName: "ImageTesting",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/ImageTesting",
        demoUrl: "https://github.com/Regonold520/LoveSprite/releases/tag/Build2"
    },
    {
        name: "ADORE",
        date: "Dec - 2025",
        desc: `A library for the LOVE2D game framework, intended to help users to create games in a more orderly and organised fashion, it provides many utility features like, sprite caching, camera handling and advanced object drawing`,
        img: "AdoreThumb.png",
        repoUrl: "https://github.com/Regonold520/ADORE-RECODE",
        hackatimeName: "ADORE",
        hackatimeUrl: "https://hackatime.hackclub.com/@regonold/project/ADORE",
        demoUrl: "https://github.com/Regonold520/ADORE-RECODE/releases/tag/v.1.0.0"
    }
];

const projectsHolder = document.querySelector("#projects-holder");
const articleHolder = document.querySelector("#article-holder");

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

        titleHolder.append(titleText)

        

        const dateText = document.createElement("p")
        dateText.className = "text-nowrap  text-[1.75rem] text-dark-brown";
        dateText.textContent = proj.date;

        
        titleHolder.append(dateText)
        card.append(titleHolder)

        if (proj.hackatimeName) {
            const timeText = document.createElement("p")
            timeText.className = "text-nowrap  text-[1.75rem] text-dark-brown";
            getProjTime(proj.hackatimeName).then(t => timeText.textContent = t.concat(" Time making"))

            card.append(timeText)
        } 
        
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

function getArticleInfo() {

}

async function genArticleCards() {
    const response = await fetch(`articles/index.json`)
    const data = await response.json();

    

    for (const art of data.articles) {
        const response2 = await fetch(`articles/${art}`)
        const article = await response2.json();

        const card = document.createElement("div")
        card.className = "outline outline-light-brown outline-5 rounded-3xl outline-dashed w-full p-3 self-start overflow-hidden shrink-0"

        const textCol = document.createElement("div")
        textCol.className = "flex flex-col flex-1 text-center p-3"

        const titleText = document.createElement("p")
        titleText.className = "text-[2rem] text-dark-brown"
        titleText.textContent = article.title
        textCol.append(titleText);

        const dateText = document.createElement("p")
        dateText.className = "text-[1.5rem]"
        dateText.textContent = article.date
        textCol.append(dateText);

        card.append(textCol);

        const secondHolder = document.createElement("div")
        secondHolder.className = "relative"

        const newImg = document.createElement("img")
        newImg.src = `articles/images/${article.img}`
        newImg.className = `outline outline-5 outline-light-brown
            float-right w-110 rounded-xl ml-4 mb-2
            [shape-outside:url('articles/images/${article.img}')]`
        secondHolder.append(newImg)

        const descText = document.createElement("p")
        descText.className = "text-[1.5rem] p-3"
        descText.textContent = article.desc
        secondHolder.append(descText);

        card.append(secondHolder)

        articleHolder.append(card);
    }
}

genArticleCards();

async function getProjTime(projName) {
    const response = await fetch(`https://hackatime.hackclub.com/api/v1/users/regonold/project/${projName}`)
    const data = await response.json();
    const seconds = data.total_seconds
    
    const hour = Math.floor(seconds / 60 / 60)
    const min = Math.floor(seconds / 60 % 60)

    let time = ``

    if (hour <= 0) {
        time = `${min}m`
    } else {
        time = `${hour}h ${min}m`
    }
    console.log(time);
    return time
}
