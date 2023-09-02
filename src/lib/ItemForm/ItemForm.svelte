<script lang="ts">
    import type { ItemType } from "$lib/types"

    export let item: ItemType
    let qty:number = 0
    let caseOrUnit: 'case' | 'unit' = 'case'

    const onSubmit = () => {
        const payload = {
            item: item,
            quantity: {
                number: qty,
                caseOrUnit: caseOrUnit.trim()
            }
        }
        console.log('submitted ' + item.name)
        console.log(payload)
    }
</script>

<form on:submit={onSubmit} class="w-full">
    <div class="flex justify-between items-end">
        <div class="flex flex-col">       
            <label class="block mb-1" for='quantity'>Quantity</label>
            <input class="w-20  h-8 px-3 text-violet-700 placeholder-violet-600 border rounded focus:shadow-outline"  id='quantity' type='number' min="0" bind:value={qty} />
        </div>
        <div class="relative flex flex-col">       
            <label class="block mb-1" for='caseOrUnit'>Case or Unit</label>
            <select class="w-30 h-8 pl-3 pr-6 text-violet-700 placeholder-gray-600 border rounded appearance-none focus:shadow-outline" id="caseOrUnit"  placeholder="Select an option" bind:value={caseOrUnit}>
                <option>
                    case
                </option>
                <option>
                    unit
                </option>
            </select>
            <div class="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-violet-700" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
              </div>
        </div>

        <button type="submit" disabled={qty <= 0 || qty > 99} class="max-h-10 bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50">Submit</button> 
  
    </div>
</form>