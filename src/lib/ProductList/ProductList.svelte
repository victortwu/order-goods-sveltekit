<script lang="ts">
    import Item from "$lib/Item/Item.svelte";
    import { productList, shopppingList } from "./tempData";

    let query = '';

    const onInput = (e: Event) => {
        query = (e.target as HTMLInputElement).value
    }

    $: filterdList = productList.filter(item => {
            if (query === '') {
                return item
            } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                return item
            }
        })
     
    const isItInTheList =  (id: number) => {
        return !!shopppingList.find(item => item.item.id === id)
    }
</script>

<div class="flex flex-col gap-4">
    <input on:input={(e) => onInput(e)} class="rounded p-2 max-w-lg text-slate-700 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="search" type="text" maxlength="30" placeholder="Search" bind:value={query}/>
    {#each filterdList as item}
        <Item item={item} isEdit={isItInTheList(item.id)}/>
    {/each}
</div>