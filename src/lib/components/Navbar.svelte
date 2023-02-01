<script lang="ts">
    import {accessToken, refreshToken} from "../utils/authStore.js";
    import {push} from 'svelte-spa-router'
    import {getAuth, signOut} from "firebase/auth";

    let token: string
    accessToken.subscribe(val => {
        token = val
    })

    let onSignOut = async () => {
        let auth = getAuth()
        await signOut(auth)
        accessToken.set("")
        refreshToken.set("")
        await push("/")
    };
</script>
<div class="navbar bg-base-100 rounded-box">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="#">Pandora's Box</a>
    </div>
    <div class="flex-none gap-2">
        {#if !token}
            <a class="btn" href="#/signin">Sign in</a>
            <a class="btn btn-primary" href="#/signup">Sign up</a>
        {:else}
            <button class="btn btn-primary" on:click={onSignOut}>Sign out</button>
        {/if}
    </div>
</div>