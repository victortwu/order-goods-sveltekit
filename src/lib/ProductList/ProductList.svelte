<script lang="ts">
	import { onMount } from 'svelte';
	import { shoppingList } from '$lib/stores/shoppingListStore';
	import { productList } from './tempData';
	import Item from '$lib/Item/Item.svelte';
	import type { AddedItemType } from '$lib/types';

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

	$: filterdList = productList.filter((item) => {
		if (query === '') {
			return item;
		} else if (item.name.toLowerCase().includes(query.toLowerCase())) {
			return item;
		}
	});

	const isItInTheList = (id: number | string) => {
		return !!list.find((item) => item.item.id === id);
	};
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
		{#each filterdList as item}
			<Item {item} isEdit={isItInTheList(item.id)} />
		{/each}
	</div>
{/if}
