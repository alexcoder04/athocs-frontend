<script>
  import { onDestroy, onMount } from "svelte";
    import GraphPane from "./GraphPane.svelte";
</script>

<div class="flex flex-col xl:flex-row w-full p-2">
    <GraphPane id="left" />
    <GraphPane id="right" />
</div>
