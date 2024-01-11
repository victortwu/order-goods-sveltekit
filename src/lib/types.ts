export type ItemType = {
	id: number | string;
	name: string;
	upc?: number | string;
	vendorProductName?: string;
	vendorID?: string;
	category?: string;
	subCategory?: string;
};

export type QuantityType = {
	number: number;
	caseOrUnit: 'case' | 'unit';
	isCase?: boolean;
};

export type AddedItemType = {
	item: ItemType;
	quantity: QuantityType;
};
