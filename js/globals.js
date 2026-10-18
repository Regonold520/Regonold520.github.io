const projects2 = [
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

const projects = [];

async function cacheProjects() {
    const response = await fetch(`json/projects/index.json`)
    const data = await response.json();

    

    for (const pro of data.projects) {
        const response2 = await fetch(`json/projects/${pro}.json`)
        const proj = await response2.json();

        let newEntry = {
            name: proj.name,
            date: proj.date,
            desc: proj.shortDesc,
            longDesc: proj.longDesc,
            img: proj.thumbnail,
            techStack: proj.techStack
        }

        if (proj.repoUrl) {newEntry.repoUrl = proj.repoUrl;}
        if (proj.hackatimeUrl) {
            newEntry.hackatimeUrl = proj.hackatimeUrl;
            newEntry.hackatimeName = proj.hackatimeName;
        }
        if (proj.demoUrl) {newEntry.demoUrl = proj.demoUrl;}

        projects.push(newEntry);
    }
}

const techs = {
    godot: {
        name: "Godot",
        url: "https://godotengine.org/",
        icon: "godot"
    },
    lua: {
        name: "Lua",
        url: "https://www.lua.org/",
        icon: "lua"
    },
    love2d: {
        name: "Love2D",
        url: "https://love2d.org/",
        icon: "love2d"
    }
}

const projectsReady = cacheProjects();



function getProj(name) {
    let returnProj = null
    for (const proj of projects) {
        if (proj.name == name) {returnProj = proj}
    }
    return returnProj
}