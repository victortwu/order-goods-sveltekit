<script lang="ts">
    import { slide } from 'svelte/transition'
    import ItemForm from '$lib/ItemForm/ItemForm.svelte';
    import type { ItemType, QuantityType } from "$lib/types";
    import EditIcon from '$lib/Icons/EditIcon.svelte';
    import UpChevron from '$lib/Icons/UpChevron.svelte';    
    import DownChevron from '$lib/Icons/DownChevron.svelte';
    import GreenCheckmark from '$lib/Icons/GreenCheckmark.svelte';
   
    export let item: ItemType
    export let quantityType: QuantityType = {number: 0, caseOrUnit: 'case'}
    export let isEdit: boolean = false
    export let isOnList: boolean = false
    
    if (isOnList) {
        isEdit = true
    }
    
    let expanded = false

    let containerStyle = "bg-black text-slate-400 p-4 rounded-md shadow-lg"

    if (isOnList) {
        containerStyle = "bg-slate-900 text-cyan-400 p-4 rounded-md shadow-lg"
    }

    const toggleAccordion = () => {
        expanded = !expanded
    }
</script>

<div class="{containerStyle}">
        <div>
            <div class="flex justify-between items-start">
                <h4 class="mb-3 text-xl font-semibold tracking-tight">{item.name} {isOnList ? `(${quantityType.number} ${quantityType.caseOrUnit})` : ""}</h4>
                {#if isEdit && !isOnList}
                <div class="flex">
                    <GreenCheckmark/>
                    <p class="ml-2 text-green-600">Item added.</p>
                </div>
                
                {/if}
            </div>
           
            {#if expanded}
                <!-- close button -->
                <button  on:click={toggleAccordion} class="float-right bg-transparent hover:text-white text-slate-400 font-bold py-2 px-4"><UpChevron/></button>
            {:else if isEdit}
                <!-- edit button -->
                <button on:click={toggleAccordion} class="float-right bg-transparent hover:text-white text-slate-400 font-bold py-2 px-4"><EditIcon/></button>
            {:else}
                <!-- add button -->
                <button  on:click={toggleAccordion} class="float-right text-3xl bg-transparent hover:text-white text-slate-400 font-bold py-2 px-4"><DownChevron/></button>
            {/if}
        </div>
        
        {#if expanded}
        <div in:slide={{duration: 200}} out:slide={{duration: 200}} class="flex md:p-0 w-full transform transition duration-300 ease-in-out" >
            <ItemForm item={item} isEdit={isEdit} bind:expanded/>
        </div>
        {/if}
</div>