/*==========================================
            ONEAI SIDEBAR
==========================================*/

const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");

/*==========================================
            MOBILE TOGGLE
==========================================*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });

}

/*==========================================
        CLOSE ON OUTSIDE CLICK
==========================================*/

document.addEventListener("click",(e)=>{

    if(window.innerWidth>992) return;

    if(
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){

        sidebar.classList.remove("active");

    }

});

/*==========================================
        CLOSE AFTER MENU CLICK
==========================================*/

document.querySelectorAll(".sidebar-nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth<=992){

            sidebar.classList.remove("active");

        }

    });

});

/*==========================================
        ACTIVE MENU
==========================================*/

const navLinks=document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/*==========================================
        COLLAPSE DESKTOP
==========================================*/

let collapsed=false;

function toggleDesktopSidebar(){

    if(window.innerWidth<=992) return;

    collapsed=!collapsed;

    sidebar.classList.toggle("collapsed");

    document.querySelector(".workspace")
        .classList.toggle("expanded");

}

/*==========================================
        DOUBLE CLICK LOGO
==========================================*/

const logo=document.querySelector(".logo");

if(logo){

    logo.addEventListener("dblclick",toggleDesktopSidebar);

}

/*==========================================
        WINDOW RESIZE
==========================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>992){

        sidebar.classList.remove("active");

    }

});