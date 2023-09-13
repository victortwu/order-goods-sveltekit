<script lang="ts">
    import { slide } from 'svelte/transition'
    import ItemForm from '$lib/ItemForm/ItemForm.svelte';
    import type { ItemType } from "$lib/types";

    export let item: ItemType
    export let isEdit: boolean = false
    
    let expanded = false

    const toggleAccordion = () => {
        expanded = !expanded
    }
</script>

<div class="bg-black border-2 border-l-violet-900 border-y-black border-r-black text-cyan-400 p-4 overflow-hidden rounded-md shadow-lg">
        <div>
            <h4 class="mb-3 text-xl font-semibold tracking-tight">{item.name}</h4>
            {#if expanded}
                <!-- close button -->
                <button  on:click={toggleAccordion} class="float-right text-3xl bg-transparent hover:text-cyan-200 text-cyan-400 font-bold py-2 px-4">^</button>
            {:else if isEdit}
                <!-- edit button -->
                <button on:click={toggleAccordion} class="float-right text-2xl bg-transparent hover:text-cyan-200 text-cyan-400 font-bold py-2 px-4">&#9998;</button>
            {:else}
                <!-- add button -->
                <button  on:click={toggleAccordion} class="float-right text-3xl bg-transparent hover:text-cyan-200 text-cyan-400 font-bold py-2 px-4">+</button>
            {/if}
        </div>
        
        {#if expanded}
        <div  in:slide={{duration: 200}} out:slide={{duration: 200}} class="flex md:p-0 w-full transform transition duration-300 ease-in-out" >
            <ItemForm item={item} isEdit={isEdit} bind:expanded/>
        </div>
        {/if}
</div>