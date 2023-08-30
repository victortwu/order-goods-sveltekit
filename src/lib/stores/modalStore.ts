import { writable } from 'svelte/store';

const createModalStore = () => {
	const { subscribe, update } = writable(false);
	return {
		subscribe,
		open: () => update((state) => (state = true)),
		close: () => update((state) => (state = false)),
		toggle: () => update((state) => !state)
	};
};

export const modalStore = createModalStore();
