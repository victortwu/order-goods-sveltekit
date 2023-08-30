<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import  Modal  from "$lib/Modal/Modal.svelte";
    import { modalStore } from "$lib/stores/modalStore";


    const openModal = () => {
        modalStore.open()
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Card data={{title: "Chicken Thigh", description: 'This is the description', id:1}}/>
<button on:click={openModal}>open</button>

<Modal title="I'm a modal">

      <p>Some content</p>

</Modal>
