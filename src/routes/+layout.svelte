<script>
    export const prerender = false;
    export const ssr = false;

    import "../app.css";
</script>


<div class="flex flex-col w-full border-opacity-50 p-5">

    <div class="navbar bg-base-100 rounded-2xl">
        <a class="btn btn-ghost normal-case text-xl">Pandora's Box</a>
    </div>

    <div class="grid card rounded-box place-items-center p-5 m-5">
        <div class="overflow-x-auto">
            <slot/>
        </div>
    </div>
</div>
