<script lang="ts">
    import { modalStore } from "$lib/stores/modalStore";

    export let title = ''
    
    const closeModal = () => {
        modalStore.close()
    }

</script>

{#if $modalStore}
<div
	class="fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"

    >
    <div role='document' class="bg-violet-700 text-white w-1/2 p-4 rounded shadow-lg">
        <h1 id="modal-title">{title}</h1>
    <slot />
    <button on:click={closeModal}>close</button>
    </div>
</div>
{/if}