<script lang="ts">
	import { shoppingList } from '$lib/stores/shoppingListStore';
	import { createList } from '$lib/API/createList';
	import { onMount } from 'svelte';
	import Item from '$lib/Item/Item.svelte';
	import type { AddedItemType } from '$lib/types';

	let mounted = false;

	let list: AddedItemType[] = [];
	onMount(() => {
		shoppingList.subscribe((val) => (list = val));
		mounted = true;
	});

	const onSubmit = () => {
		const payload = {
			list: JSON.parse(localStorage.list)
		};
		console.log(payload);
		createList(payload);
		shoppingList.reset();
	};
</script>

<div class="flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6">
	{#each list as item}
		<Item item={item.item} quantityType={item.quantity} isEdit={true} isOnList={true} />
	{/each}
	{#if mounted}
		<div class="w-full">
			{#if list.length !== 0}
				<button on:click={onSubmit} class="m-6">Submit</button>
			{/if}
		</div>
	{/if}
</div>
