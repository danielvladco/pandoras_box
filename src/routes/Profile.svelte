<script lang="ts">

    import {collection, query, where} from "firebase/firestore";
    import {getFirestore} from "../lib/utils/db";
    import {getAuth} from "firebase/auth";
    import {push} from "svelte-spa-router";

    const auth = getAuth()
    const userId = auth.currentUser?.uid

    //TODO use later
    async function get() {
        const db = getFirestore()
        const data = await query(collection(db, "boxes"), where("userId", "==", userId))
        console.log(data)
        return {
            userId,
            data
        }
    }


</script>
<div class="card w-96 bg-base-100 shadow-xl">
    <!--{#await get() then data}-->
    <!--    {JSON.stringify(data)}-->
    <!--{:catch err}-->
    <!--    err: {err}-->
    <!--{/await}-->
    <figure><img src="/images/pandoras_box.png" alt="pandora's box"/></figure>
    <div class="card-body">
        <h2 class="card-title">Daniel's box</h2>
        <div class="card-actions justify-end">
            <a class="btn btn-primary" href="#">Add</a>
            <a class="btn btn" href="#">Play</a>
            <a class="btn btn-error" href="#">Open</a>
        </div>
    </div>
</div>