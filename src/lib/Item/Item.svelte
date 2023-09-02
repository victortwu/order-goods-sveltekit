<script lang="ts">
    import { slide } from 'svelte/transition'
    import ItemForm from '$lib/ItemForm/ItemForm.svelte';
    import type { ItemType } from "$lib/types";

    export let item: ItemType
    export let isEdit: boolean = false
    
    const buttonLabel = isEdit ? 'Edit' : 'Add'
    
    let expanded = false

    const toggleAccordion = () => {
        expanded = !expanded
    }
</script>

<div class="bg-violet-700 text-white max-w-lg overflow-hidden rounded-lg shadow-lg">
        <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold tracking-tight">{item.name}</h4>
            <button  on:click={toggleAccordion} class="float-right mb-4 bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded">{expanded ? 'Hide' : buttonLabel}</button>
        </div>
        
        {#if expanded}
        <div  in:slide={{duration: 200}} out:slide={{duration: 200}} class="flex p-5 md:p-0 w-full transform transition duration-300 ease-in-out pb-10" >
            <ItemForm item={item}/>
        </div>
        {/if}
</div>