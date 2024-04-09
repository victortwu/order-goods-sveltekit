import type { AddedItemType } from '$lib/types';
import { apiEndpoints } from './apiEndoints';

export const createList = async (body: { list: AddedItemType[] }) => {
	try {
		const response = await fetch(apiEndpoints.LISTS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		if (!response.ok) {
			throw new Error('Failed to create list');
		}
		const data = await response.json();
		console.log('List created:', data);
		return data;
	} catch (error) {
		console.error('Failed to create list:', error);
		// Handle the error - perhaps implement a toast notification component
	}
};
