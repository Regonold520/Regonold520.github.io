const reviewHolder = document.querySelector("#review-holder");

async function genReviewCards() {
    const response = await fetch(`json/reviews/reviews.json`)
    const data = await response.json();

    for (const rev of data) {
        const holder = document.createElement("div");
        holder.className = "flex flex-row gap-5";

        const img = document.createElement("img");
        img.className = "flex flex-1 rounded-xl self-start outline-4 outline-brown min-h-0 min-w-0";
        img.src = `images/reviews/${rev.img}.png`;

        const textHolder = document.createElement("div");
        textHolder.className = "flex flex-col flex-2 px-5 outline outline-light-brown outline-5 rounded-3xl outline-dashed";


        const titleText = document.createElement("p");
        titleText.className = "text-[2rem] text-dark-brown py-3";
        titleText.textContent = `${rev.name}`.concat(" Created by ").concat(rev.creator);

        const descText = document.createElement("p");
        descText.className = "text-[1.5rem] py-3";
        descText.textContent = rev.desc;

        textHolder.append(titleText);
        textHolder.append(descText);

        holder.append(img);
        holder.append(textHolder);

        reviewHolder.append(holder);
    }
}

genReviewCards();