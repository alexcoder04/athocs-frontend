<script>
    import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "$lib";
    import PanesContainer from "$lib/components/PanesContainer.svelte";
</script>

<p class="p-4 pb-2">
    For CSV logs, use the API (<code>http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/api/data?station=RPIZ-ALEX&amp;time_from=...&amp;time_to=...</code>)
</p>

<PanesContainer />
