<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchProductList } from '$lib/API/fetchProductList';
	import { shoppingList } from '$lib/stores/shoppingListStore';
	import Item from '$lib/Item/Item.svelte';
	import type { AddedItemType, ItemType } from '$lib/types';

	let productList:ItemType[] = [];
	
	let mounted = false;

	let list: AddedItemType[] = [];
	onMount(() => {
		shoppingList.subscribe((val) => (list = val));
		mounted = true;
	});

	let query = '';

	const onInput = (e: Event) => {
		query = (e.target as HTMLInputElement).value;
	};

	$: isItInTheList = (id: number | string) => {
		const addedItem = list.find((item) => item.item.id === id);
		return {
			isInList: !!addedItem,
			quantity: {
				number: addedItem?.quantity?.number || 0,
				caseOrUnit: addedItem?.quantity?.caseOrUnit || 'case'
			}
		};
	};

	$: filteredList = productList.filter((item) => {
		if (query === '') {
			return item;
		} else if (item.name.toLowerCase().includes(query.toLowerCase())) {
			return item;
		}
	});

	onMount(async () => {
		productList = await fetchProductList();
	});
</script>

{#if mounted}
	<div class="flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6">
		<input
			on:input={(e) => onInput(e)}
			class="rounded p-2 bg-black text-slate-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			id="search"
			type="text"
			maxlength="30"
			placeholder="Search"
			bind:value={query}
		/>
		{#each filteredList as item}
			<Item
				{item}
				quantityType={isItInTheList(item.id).quantity}
				isEdit={isItInTheList(item.id).isInList}
			/>
		{/each}
	</div>
{/if}
