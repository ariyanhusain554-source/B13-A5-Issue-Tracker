const allFilterbtn = document.getElementById("allFilterbtn");
const openFilterbtn = document.getElementById("openFilterbtn");
const closeFilterbtn = document.getElementById("closeFilterbtn");

const cardContainer = document.getElementById("cards-container");



// step 1
allFilterbtn.addEventListener("click", ())




async function getCards() {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    //console.log(data);
    displayCards(data.data);
}
function displayCards(cards) {

    cards.innerHTML = "";
    cards.forEach(card) => {
        const div = document.createElement("div");
        div.className = `card bg-[#ffffff]  w-96 shadow-sm`;
        div.innerHTML = `
        
        <div class="card-body ">

        <div class="flex justify-between items-center">
            <span>status</span>
            <div class="badge badge-outline">NEW</div>
        </div>


        <h2 class="card-title font-bold text-2xl text-black">
            Fix navigation menu on mobile devices
        </h2>
        <p class="text-[#64748B]">A card component has a figure, a body part, and inside body there are title and actions parts</p>
        
        <div>
            <div class="badge badge-outline">NEW</div>
            <div class="badge badge-outline">NEW</div>
        </div>
        <hr>
       <div class="text-[#64748B]">
        <p>#1 by <span>author</span></p>
        <p>createdAt</p>
       </div>
        
        `;
        cards-container.appendChild(div);

    };
}
