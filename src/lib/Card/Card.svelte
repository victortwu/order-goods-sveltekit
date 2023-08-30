<script lang="ts">
    export let data = {title: "This is the title", id:1, description: 'This is the description'}
    export let isAdd: boolean = true;
    
    const {title, description, id} = data
</script>

<div class="bg-violet-700 text-white max-w-xs overflow-hidden rounded-lg shadow-lg">
    <div class="px-6 py-4">
      <h4 class="mb-3 text-xl font-semibold tracking-tight">{title}</h4>
      <p class="leading-normal">{description}</p>
      <button class="float-right mb-4 bg-violet-900 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded">{isAdd ? "Add" : "Edit"}</button>
    </div>
  </div>