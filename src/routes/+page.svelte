<script>
    import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "$lib";
</script>

<h1>athocs webUI (now in Svelte!)</h1>
<h3>(work in progress)</h3>

<p>For CSV logs, use the API (<code>http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/api/data?station=RPIZ-ALEX&amp;time_from=...&amp;time_to=...</code>)</p>

<img src="http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/graphs/graph-last-24-hours.png" alt="graph of last 24 hours">
<img src="http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/graphs/graph-all-2501171524.png" alt="graph for some random days">

