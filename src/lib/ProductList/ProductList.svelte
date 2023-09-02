<script lang="ts">
    import Item from "$lib/Item/Item.svelte";
    import ItemForm from "$lib/ItemForm/ItemForm.svelte";
    import type {ItemType} from "$lib/types";

    export const productList: ItemType[] = [
    {
        id: 20796680000,
        RDproductName: 'BF HALAL CHUCKROLL R/W',
        name: 'Beef Chuck',
        category: 'Food COGS'
    },
    {
        id: 20713500000,
        RDproductName: 'LAMB GROUND',
        name: 'Ground Lamb',
        category: 'Food COGS'
    },
    {
        id: 76069501695,
        RDproductName: 'YOG DAHI W/M JF 5#',
        name: 'Yogurt',
        category: 'Food COGS'
    },
    {
        id: 20795020000,
        RDproductName: 'CHX HAL THIGH CVP',
        name: 'Chicken Thigh',
        category: 'Food COGS'
    },
]
</script>

<div class="flex flex-col gap-4">
    {#each productList as item}
    <Item item={item}>
        <ItemForm/>
    </Item>
    {/each}
</div>