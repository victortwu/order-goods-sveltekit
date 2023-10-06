<script lang="ts">
	import { shopppingList } from "$lib/ProductList/tempData";
    import Item from "$lib/Item/Item.svelte";
</script>

<div class="flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6">
   {#each shopppingList as item}
        <Item item={item.item} quantityType={item.quantity} isEdit={true} isOnList={true}/>
    {/each}
</div>
