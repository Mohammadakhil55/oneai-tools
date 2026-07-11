import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

/*==============================
    PROFILE ELEMENTS
==============================*/

const profileName=document.getElementById("profileName");

const profileEmail=document.getElementById("profileEmail");

const profilePhoto=document.getElementById("profilePhoto");

const loginBtn=document.getElementById("loginBtn");

const logoutBtn=document.getElementById("logoutBtn");

/*==============================
    USER STATE
==============================*/

onAuthStateChanged(auth,(user)=>{

    if(user){

        if(profileName){

            profileName.textContent=user.displayName || "OneAI User";

        }

        if(profileEmail){

            profileEmail.textContent=user.email;

        }

        if(profilePhoto){

            profilePhoto.src=user.photoURL ||

            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}&background=6C63FF&color=fff`;

        }

        if(loginBtn){

            loginBtn.style.display="none";

        }

        if(logoutBtn){

            logoutBtn.style.display="block";

        }

    }

    else{

        if(profileName){

            profileName.textContent="Guest";

        }

        if(profileEmail){

            profileEmail.textContent="Sign in to sync your work";

        }

        if(loginBtn){

            loginBtn.style.display="block";

        }

        if(logoutBtn){

            logoutBtn.style.display="none";

        }

    }

});
/*==============================
        LOGOUT
==============================*/

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

try{

await signOut(auth);

window.location.href="login.html";

}

catch(error){

console.log(error);

}

});

}

/*==============================
    GREETING
==============================*/

const greeting=document.getElementById("greeting");

onAuthStateChanged(auth,(user)=>{

if(greeting){

const hour=new Date().getHours();

let message="Good Evening";

if(hour<12){

message="Good Morning";

}

else if(hour<17){

message="Good Afternoon";

}

if(user){

greeting.textContent=`${message}, ${user.displayName || "User"} 👋`;

}

else{

greeting.textContent=`${message}, Guest 👋`;

}

}

});