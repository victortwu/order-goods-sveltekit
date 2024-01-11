import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { AddedItemType } from '$lib/types';

const getListFromLocalStorage = (key: string, initialValue: AddedItemType[] = []) => {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
		return initialValue;
	}
};

const createShoppingListStore = (key: string, initialValue: AddedItemType[] = []) => {
	const { subscribe, update, set } = writable(getListFromLocalStorage(key, initialValue));

	if (browser) {
		subscribe((items) => localStorage.setItem(key, JSON.stringify(items)));
	}

	return {
		subscribe,
		addItem: (newItem: AddedItemType) => update((items) => [...items, newItem]),
		// todo: this can be just replacing quantity property
		editItem: (id: string, newItem: AddedItemType) =>
			update((items) =>
				items.map((item: AddedItemType) => (item.item.id === id ? { ...item, ...newItem } : item))
			),
		deleteItem: (id: string) =>
			update((items) => items.filter((item: AddedItemType) => item.item.id !== id)),
		reset: () => set([])
	};
};

export const shoppingList = createShoppingListStore('list', []);
