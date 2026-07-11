import { auth } from "./firebase-config.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

GoogleAuthProvider,

signInWithPopup,

sendPasswordResetEmail,

updateProfile,

signOut,

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

/*==========================================
        GOOGLE PROVIDER
==========================================*/

const provider = new GoogleAuthProvider();

/*==========================================
        SIGNUP
==========================================*/

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match.");

return;

}

try{

const userCredential=await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(userCredential.user,{

displayName:name

});

alert("🎉 Account created successfully!");

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

});

}
/*==========================================
        LOGIN
==========================================*/

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("✅ Login Successful!");

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

});

}

/*==========================================
        GOOGLE LOGIN
==========================================*/

const googleLogin=document.getElementById("googleLogin");

const googleSignup=document.getElementById("googleSignup");

async function googleAuth(){

try{

await signInWithPopup(

auth,

provider

);

alert("🎉 Google Login Successful!");

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

}

if(googleLogin){

googleLogin.addEventListener("click",googleAuth);

}

if(googleSignup){

googleSignup.addEventListener("click",googleAuth);

}

/*==========================================
        LOGOUT
==========================================*/

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});

}
/*==========================================
        FORGOT PASSWORD
==========================================*/

const forgotForm = document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

try{

await sendPasswordResetEmail(auth,email);

alert("📧 Password reset email sent successfully!");

window.location.href="login.html";

}

catch(error){

alert(error.message);

}

});

}

/*==========================================
        AUTH STATE
==========================================*/

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In:",user.email);

const profileName=document.getElementById("profileName");

const profileEmail=document.getElementById("profileEmail");

const profilePhoto=document.getElementById("profilePhoto");

if(profileName){

profileName.textContent=user.displayName || "OneAI User";

}

if(profileEmail){

profileEmail.textContent=user.email;

}

if(profilePhoto){

profilePhoto.src=user.photoURL ||
"https://ui-avatars.com/api/?name="+
encodeURIComponent(user.displayName || "User")+
"&background=6C63FF&color=fff";

}

}

else{

console.log("Guest Mode");

}

});

/*==========================================
        PROTECT PAGES
==========================================*/

const protectedPages=[

"profile.html",

"history.html",

"settings.html"

];

const currentPage=window.location.pathname.split("/").pop();

if(protectedPages.includes(currentPage)){

onAuthStateChanged(auth,(user)=>{

if(!user){

alert("Please login to continue.");

window.location.href="login.html";

}

});

}

/*==========================================
        AUTO REDIRECT
==========================================*/

const authPages=[

"login.html",

"signup.html"

];

if(authPages.includes(currentPage)){

onAuthStateChanged(auth,(user)=>{

if(user){

window.location.href="../index.html";

}

});

}

/*==========================================
        CONTINUE AS GUEST
==========================================*/

const guestButtons=document.querySelectorAll(".guest-btn");

guestButtons.forEach(button=>{

button.addEventListener("click",()=>{

localStorage.setItem("guest","true");

window.location.href="../index.html";

});

});

/*==========================================
        SESSION
==========================================*/

window.addEventListener("beforeunload",()=>{

console.log("OneAI Session Active");

});

console.log("✅ Firebase Authentication Ready");