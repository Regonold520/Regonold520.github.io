const projectsHolder = document.querySelector("#projects-holder");
const articleHolder = document.querySelector("#article-holder");

function createButton(name, proj, width) {
    let url = proj[name.toLowerCase().concat("Url")]

    if (name == "More Info") {
        url = `projects.html?project=${proj.name}`
    }

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
            newImg.src = "images/projects/".concat(proj.img); 

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

        const button = createButton("More Info", proj, 60)
        buttonHolder.append(button)

        card.append(buttonHolder)

        projectsHolder.append(card)
    }
}

projectsReady.then(() => {
    genProjectCards();
})

async function genArticleCards() {
    const response = await fetch(`json/articles/index.json`)
    const data = await response.json();

    

    for (const art of data.articles) {
        const response2 = await fetch(`json/articles/${art}`)
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
        newImg.src = `images/articles/${article.img}`
        newImg.className = `
            float-right w-110 rounded-xl ml-4 mb-2
            [shape-outside:url('images/articles/${article.img}')]`
        secondHolder.append(newImg)

        const descText = document.createElement("p")
        descText.className = "text-[1.5rem] p-3 mr-8"
        descText.textContent = article.desc
        secondHolder.append(descText);

        card.append(secondHolder)

        articleHolder.append(card);
    }
}

genArticleCards();