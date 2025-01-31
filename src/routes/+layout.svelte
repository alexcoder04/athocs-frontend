<script>
    let { children } = $props();
    import HeaderBar from "$lib/components/HeaderBar.svelte";
    import "../app.css";
</script>

<svelte:head>
    <title>athocs webportal</title>
</svelte:head>

<div class="min-h-screen bg-slate-700 text-white">
    <HeaderBar />

    <main>
        {@render children()}
    </main>
</div>
