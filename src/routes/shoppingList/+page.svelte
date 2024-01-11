<script lang="ts">
	import { shoppingList } from '$lib/stores/shoppingListStore';
	import { onMount } from 'svelte';
	import Item from '$lib/Item/Item.svelte';
	import type { AddedItemType } from '$lib/types';

	let list: AddedItemType[] = [];
	onMount(() => shoppingList.subscribe((val) => (list = val)));
</script>

<div class="flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6">
	{#each list as item}
		<Item item={item.item} quantityType={item.quantity} isEdit={true} isOnList={true} />
	{/each}
</div>
