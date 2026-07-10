/*==========================================
            ONEAI SEARCH
==========================================*/

const searchInput = document.querySelector(".search-box input");

const toolCards = document.querySelectorAll(".tool-card");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const keyword = this.value.toLowerCase().trim();

        toolCards.forEach(card=>{

            const title = card.querySelector("h3").textContent.toLowerCase();

            const desc = card.querySelector("p").textContent.toLowerCase();

            if(
                title.includes(keyword) ||
                desc.includes(keyword)
            ){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}

/*==========================================
        CLEAR SEARCH (ESC)
==========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        searchInput.value="";

        toolCards.forEach(card=>{

            card.style.display="block";

        });

    }

});

/*==========================================
        SEARCH PLACEHOLDER ANIMATION
==========================================*/

const placeholders=[

"Search AI tools...",

"Search Image Generator...",

"Search Video AI...",

"Search PDF AI...",

"Search AI Writer...",

"Search Code Assistant..."

];

let index=0;

setInterval(()=>{

    if(searchInput){

        searchInput.placeholder=placeholders[index];

        index++;

        if(index===placeholders.length){

            index=0;

        }

    }

},2500);