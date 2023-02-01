<script>
    import Navbar from "./lib/components/Navbar.svelte";
    import Router from 'svelte-spa-router';


    import "./app.css";
    import {initializeApp} from 'firebase/app';
    import Home from "./routes/Home.svelte";
    import SignIn from "./routes/login/SignIn.svelte";
    import SignUp from "./routes/signup/SignUp.svelte";
    // import { getAnalytics } from "firebase/analytics";

    const app = initializeApp({
        apiKey: "AIzaSyDZbq__q86IExiog_jJfL8jYPubif1JzKY",
        authDomain: "pandoras-box-game.firebaseapp.com",
        projectId: "pandoras-box-game",
        storageBucket: "pandoras-box-game.appspot.com",
        messagingSenderId: "1009447117671",
        appId: "1:1009447117671:web:8dafaf2800866311a4c5c2",
        measurementId: "G-FWFTZ6NZDK"
    });
    // const analytics = getAnalytics(app); FIXME
</script>


<div class="flex flex-col w-full border-opacity-50 p-5">
    <Navbar/>

    <div class="grid card rounded-box place-items-center p-5">
        <Router routes={{
            '/': Home,
            '/signup': SignUp,
            '/signin': SignIn
        }}/>

    </div>
</div>
