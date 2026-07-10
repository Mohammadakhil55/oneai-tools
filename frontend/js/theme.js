/*==========================================
            ONEAI THEME
==========================================*/

const root = document.documentElement;

const themeButton = document.querySelector(".theme-btn");

/*==============================
        APPLY THEME
==============================*/

function applyTheme(theme){

    if(theme==="system"){

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        root.setAttribute(
            "data-theme",
            prefersDark ? "dark" : "light"
        );

        return;
    }

    root.setAttribute("data-theme",theme);

}

/*==============================
        LOAD SAVED THEME
==============================*/

let currentTheme = localStorage.getItem("oneai-theme");

if(!currentTheme){

    currentTheme="system";

}

applyTheme(currentTheme);

/*==============================
        THEME SWITCHER
==============================*/

function nextTheme(){

    if(currentTheme==="light"){

        currentTheme="dark";

    }

    else if(currentTheme==="dark"){

        currentTheme="system";

    }

    else{

        currentTheme="light";

    }

    localStorage.setItem("oneai-theme",currentTheme);

    applyTheme(currentTheme);

    updateIcon();

}

/*==============================
        UPDATE ICON
==============================*/

function updateIcon(){

    if(!themeButton) return;

    const icon = themeButton.querySelector("i");

    if(currentTheme==="light"){

        icon.className="fa-solid fa-sun";

    }

    else if(currentTheme==="dark"){

        icon.className="fa-solid fa-moon";

    }

    else{

        icon.className="fa-solid fa-circle-half-stroke";

    }

}

updateIcon();

/*==============================
        BUTTON EVENT
==============================*/

if(themeButton){

    themeButton.addEventListener("click",nextTheme);

}

/*==============================
        SYSTEM THEME CHANGE
==============================*/

window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener("change",()=>{

    if(currentTheme==="system"){

        applyTheme("system");

    }

});