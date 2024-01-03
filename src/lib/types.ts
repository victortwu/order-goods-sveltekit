export type ItemType = {
	id: number | string;
	name: string;
	upc?: number | string;
	RDproductName?: string;
	category?: string;
	subCategory?: string;
};

export type QuantityType = {
	number: number;
	caseOrUnit: 'case' | 'unit';
	isCase?: boolean;
};

export type AddedItemType = {
	id?: string;
	item: ItemType;
	quantity: QuantityType;
};
