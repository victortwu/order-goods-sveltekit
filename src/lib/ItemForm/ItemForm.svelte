<script lang="ts">
    import type { ItemType } from "$lib/types"
    import { shopppingList } from "$lib/ProductList/tempData";
    import LeftChevron from '$lib/Icons/LeftChevron.svelte';
    import RightChevron from '$lib/Icons/RightChevron.svelte';

    export let item: ItemType
    export let isEdit: boolean = false
    export let expanded

    let qty = 0
    let caseOrUnit: 'case' | 'unit' = 'case'

    const id = item.id

    if (isEdit) {
        shopppingList.forEach(item => {
            if (item.item.id === id) {
                qty = item.quantity.number
                caseOrUnit = item.quantity.caseOrUnit as 'case' | 'unit'
            }
        })
    }

    const increment = () => {
        qty++
    }

    const decrement = () => {
        if (qty === 0) return
        qty--
    }

    const onSubmit = () => {
        const payload = {
            item: item,
            quantity: {
                number: qty,
                caseOrUnit
            }
        }
        if (isEdit) {
            console.log('EDIT', payload)
        } else {
            console.log('ADD', payload)
        }
        expanded = false
    }
</script>

<form on:submit={onSubmit} class="w-full">
    <hr class="my-6 h-0.5 border-t-0 bg-violet-900 opacity-100 dark:opacity-50" />
    <div class="flex justify-between items-end">
        <div class="flex flex-col">       
            <label class="block mb-1 text-xs opacity-0" for='quantity'>Quantity</label>
            <div>
                <button on:click|preventDefault={decrement}><LeftChevron /></button>
                <input class="w-8 h-8 p-2 aspect-square text-violet-700 placeholder-violet-600 border rounded focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" id='quantity' type="number" min="0" bind:value={qty} />
                <button on:click|preventDefault={increment}><RightChevron /></button>
            </div>
           
        </div>
        <div class="relative flex flex-col">       
              <label class="text-cyan-400">
                <input type="radio" name="caseOrUnit" value="case" bind:group={caseOrUnit}/>
                <span class="ml-1">Case</span>
              </label>
              <label class="text-cyan-400">
                <input type="radio" name="caseOrUnit" value="unit" bind:group={caseOrUnit}/>
                <span class="ml-1">Unit</span>
              </label>  
        </div>

        <button type="submit" disabled={qty <= 0 || qty > 99} class="max-h-10 bg-violet-900 hover:bg-violet-500 text-white py-2 px-4 rounded disabled:opacity-50">{`${isEdit ? '' : 'Add'} ${qty} ${caseOrUnit}${qty > 1 ? 's' : ''}`}</button> 
  
    </div>
</form>