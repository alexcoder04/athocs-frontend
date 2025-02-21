<script>
    import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "$lib";
    import PanesContainer from "$lib/components/PanesContainer.svelte";
</script>

<p class="p-4 pb-2">
    For CSV logs, use the API (<code>http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/api/data?station=STID-ROOM&amp;time_from=YYYY-mm-dd_HH:MM:SS&amp;time_to=YYYY-mm-dd_HH:MM:SS</code>)
</p>

<PanesContainer />
