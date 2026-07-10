/*=========================================
            ONEAI APP
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 OneAI Loaded Successfully");

    initAnimations();

    initButtons();

});

/*=========================================
        SCROLL ANIMATIONS
=========================================*/

function initAnimations(){

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll("section,.tool-card,.project-card,.template-card,.model-card")
    .forEach(el=>observer.observe(el));

}

/*=========================================
        BUTTON RIPPLE
=========================================*/

function initButtons(){

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const rect=this.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";
            ripple.style.height=size+"px";

            ripple.style.left=e.clientX-rect.left-size/2+"px";
            ripple.style.top=e.clientY-rect.top-size/2+"px";

            ripple.className="ripple";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}

/*=========================================
        TOAST
=========================================*/

function showToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerHTML=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}

/*=========================================
        NEW WORKSPACE BUTTON
=========================================*/

const newWorkspace=document.querySelector(".new-workspace");

if(newWorkspace){

    newWorkspace.addEventListener("click",()=>{

        showToast("✨ New workspace created");

    });

}

/*=========================================
        GENERATE BUTTON
=========================================*/

const generate=document.querySelector(".generate-btn");

if(generate){

    generate.addEventListener("click",()=>{

        const textarea=document.querySelector("textarea");

        if(textarea.value.trim()===""){

            showToast("⚠ Please enter a prompt");

            return;

        }

        showToast("🚀 Generating...");

    });

}

/*=========================================
        RIPPLE CSS
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.35);

transform:scale(0);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.toast{

position:fixed;

bottom:30px;

right:30px;

background:#111827;

color:#fff;

padding:15px 22px;

border-radius:12px;

opacity:0;

transform:translateY(20px);

transition:.3s;

z-index:9999;

font-weight:500;

}

.toast.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);