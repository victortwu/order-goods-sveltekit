<script>
    import '../app.postcss'
    import Navigation from '$lib/Navigation/Navigation.svelte';
</script>



<main class='relative pt-20 flex min-h-screen min-w-screen p-6 bg-slate-900 text-slate-200 overflow-auto'>
    <Navigation />
    <slot />
</main>
