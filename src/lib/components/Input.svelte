<script lang="ts">
    import {beforeUpdate} from 'svelte';
    import {id} from "../utils/id.ts";

    let className: string = ""
    export {className as class}
    export let
        invalid: boolean,
        value: any,
        placeholder: string,
        type: string = "text"

    let init = false
    let typeActionUpdated = false

    function typeAction(node) {
        typeActionUpdated = true
        node.type = type
    }

    beforeUpdate(async () => {
        if (init) {
            return
        }
        if (typeActionUpdated) {
            init = true
            return
        }
    })
    let input = id("input")
</script>

<div class={className}>
    <input id={input} use:typeAction {placeholder} class="input input-bordered w-full"
           bind:value
           class:input-error={init && invalid}/>
    {#if init && invalid}
        <label for={input} class="label">
            <span class="label-text-alt text-error"><slot/></span>
        </label>
    {/if}
</div>
