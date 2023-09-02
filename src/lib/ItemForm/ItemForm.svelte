<script lang="ts">

</script>

<form class="p-4">
    <div class="flex gap-2">
        <div class="flex flex-col">       
            <label class="block mb-1" for='quantity'>Quantity</label>
            <input class="w-20  h-8 px-3 text-violet-700 placeholder-violet-600 border rounded focus:shadow-outline"  id='quantity' type='number' />
        </div>
        <div class="relative flex flex-col">       
            <label class="block mb-1" for='caseOrUnit'>Case or Unit</label>
            <select class="w-30 h-8 pl-3 pr-6 text-violet-700 placeholder-gray-600 border rounded appearance-none focus:shadow-outline" id="caseOrUnit"  placeholder="Select an option">
                <option >
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
    </div>
</form>