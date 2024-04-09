import { apiEndpoints } from './apiEndoints';

export const fetchProductList = async () => {
	try {
		const response = await fetch(apiEndpoints.GOODS);
		if (!response.ok) {
			throw new Error('Failed to fetch product list');
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Failed to fetch product list:', error);
		// Handle the error - perhaps implement a toast notification component
	}
};
