export type ItemType = {
	id: number;
	name: string;
	upc?: number;
	RDproductName?: string;
	category?: string;
	subCategory?: string;
};

export type QuantityType = {
	number: number;
	caseOrUnit: 'case' | 'unit';
};

export type AddedItemType = {
	id?: string;
	item: ItemType;
	quantity: QuantityType;
};
