const tacsHolder = document.querySelector("#tacs-holder");

let playerTurn = true;

let tacs = [];

function aiSelect() {
    const newTacs = [];
    for (const tac of tacs) {
        if (tac.dataset.content == "") {
            newTacs.push(tac);
        }
    }

    if (newTacs.length == 0) {
        const winnerText = document.querySelector("#winner-text");
        winnerText.textContent = "You Win"
    }

    const pickedTac = newTacs[Math.floor(Math.random() * newTacs.length)];
    pickedTac.dataset.content = "o";
    const icon = pickedTac.querySelector("div");
    icon.className = `w-15 h-15 bg-dark-brown  [mask-image:url('./icons/o.svg')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

    playerTurn = true;
}

function tacClicked(tac, event) {
    if (tac.dataset.content == "" && playerTurn == true) {
        tac.dataset.content = "x";

        const icon = tac.querySelector("div");
        icon.className = `w-15 h-15 bg-dark-brown  [mask-image:url('./icons/x.svg')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

        playerTurn = false;

        aiSelect();
    }
}

function generateTacs() {
    for (let index = 0; index < 9; index++) {
       const tac = document.createElement("div");
       tac.className = "outline outline-5 w-full transition-[color] bg-peach hover:bg-light-brown rounded-3x1 outline-dark-brown";

       const icon = document.createElement("div")
       icon.className = `w-15 h-15 bg-dark-brown  [mask-image:url('./icons/.svg')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center]`;

       tac.dataset.index = index;
       tac.dataset.content = "";

       tac.addEventListener("click", (event) => {
            tacClicked(tac, event);
        })

       tac.append(icon);
       tacsHolder.append(tac);

       tacs.push(tac);
    }

}

generateTacs();
