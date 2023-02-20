<script>
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import Input from "../../lib/components/Input.svelte";
    import {accessToken, refreshToken} from "../../lib/utils/authStore";
    import {push} from "svelte-spa-router";

    let email = "", password = ""
    $: validEmail = () => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    $: validPassword = () => /^[a-zA-Z\d@$!%*?&_-]{8,}$/.test(password)
    $: valid = () => validEmail() && validPassword()
    let errMessage;

    async function submit() {
        if (!valid()) {
            return
        }
        const auth = getAuth()
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            accessToken.set(user['accessToken'])
            refreshToken.set(user['refreshToken'])
            await push("/profile")
            //TODO log in with cookie and add xsrf protection
        } catch (e) {
            switch (e.code) {
                case "auth/wrong-password":
                case "auth/user-not-found":
                    errMessage = "Incorrect username or password"
                    break
            }
        }

    }
</script>
<form on:submit={submit} class="grid gap-4 grid-cols-1 w-full max-w-lg block">
    {#if errMessage}
        <div class="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{errMessage}</span>
            </div>
        </div>
    {/if}
    <Input type="email" placeholder="Email" invalid="{!validEmail()}" bind:value={email} class="w-full">
        Not a valid email!
    </Input>
    <Input type="password" placeholder="Password" invalid={!validPassword()} bind:value={password} class="w-full">
    </Input>
    <button type="submit" disabled={!valid()} class="btn btn-primary block float-right">Sign in</button>
</form>
