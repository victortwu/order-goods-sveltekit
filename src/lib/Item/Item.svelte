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

<div class="bg-violet-700 text-white max-w-lg p-2 overflow-hidden rounded shadow-lg">
        <div>
            <h4 class="mb-3 text-xl font-semibold tracking-tight">{item.name}</h4>
            {#if expanded}
                <!-- close button -->
                <button  on:click={toggleAccordion} class="float-right bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full">&#10005;</button>
            {:else if isEdit}
                <!-- edit button -->
                <button on:click={toggleAccordion} class="float-right  bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full">&#9998;</button>
            {:else}
                <!-- add button -->
                <button  on:click={toggleAccordion} class="float-right text-lg bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full">+</button>
            {/if}
        </div>
        
        {#if expanded}
        <div  in:slide={{duration: 200}} out:slide={{duration: 200}} class="flex md:p-0 w-full transform transition duration-300 ease-in-out" >
            <ItemForm item={item} isEdit={isEdit} bind:expanded/>
        </div>
        {/if}
</div>