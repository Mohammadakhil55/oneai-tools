import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyBzYX50wVOE6iUQW5uHEJrR7bOpVoB4iQQ",

    authDomain: "oneai-f062a.firebaseapp.com",

    projectId: "oneai-f062a",

    storageBucket: "oneai-f062a.firebasestorage.app",

    messagingSenderId: "593157502439",

    appId: "1:593157502439:web:078363a4d5a4ed9ac1b942",

    measurementId: "G-LDGWH1Y66E"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };