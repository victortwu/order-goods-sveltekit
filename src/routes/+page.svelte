<script lang="ts">
    import ProductList from "$lib/ProductList/ProductList.svelte";
    import  Modal  from "$lib/Modal/Modal.svelte";
 



</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<ProductList />

<Modal title="I'm a modal">

      <p>Some content</p>

</Modal>
