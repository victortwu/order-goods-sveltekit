<script lang="ts">
    export let title: string = "This is the title";
    export let description: string = "This is the description";
    export let isAdd: boolean = true;
</script>

<div class="bg-violet-700 text-white max-w-xs overflow-hidden rounded-lg shadow-lg">
    <div class="px-6 py-4">
      <h4 class="mb-3 text-xl font-semibold tracking-tight">{title}</h4>
      <p class="leading-normal">{description}</p>
      <button class="float-right mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{isAdd ? "Add" : "Edit"}</button>
    </div>
  </div>