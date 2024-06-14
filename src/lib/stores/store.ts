import { derived, writable } from 'svelte/store';


function createWeight() {
	const { subscribe, set, update } = writable(10);

	return {
		subscribe,
		increment: () => update((weight) => weight + 1),
		decrement: () => update((weight) => weight - 1),
      double: () => update((weight) => weight * 2),
		reset: () => set(10)
	};
}

export const weight = createWeight();

export const asPounds = derived(weight, ($weight) => $weight * 2.205);