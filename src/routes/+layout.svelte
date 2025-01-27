<script>
    let { children } = $props();
    import HeaderBar from "$lib/components/HeaderBar.svelte";
    import "../app.css";
</script>

<div class="min-h-screen bg-slate-700 text-white">
    <HeaderBar />

    <main>
        {@render children()}
    </main>
</div>

