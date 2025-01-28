<script>
    import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "../index.js";
    let station = {
        selected: "RPIZ-ALEX",
        options: [
            { value: "RPIZ-ALEX", label: "RPIZ-ALEX" }
        ]
    };

    function handleStationChange(event) {
      station.selected = event.target.value;
    }

    let timePeriod = {
        selected: "last-24h",
        options: [
            { value: "last-24h", label: "Last 24 hours" }
        ]
    };

    function handleTimePeriodChange(event) {
      timePeriod.selected = event.target.value;
    }
</script>

<div class="w-full xl:w-1/2 p-2">
    <div class="bg-slate-600 text-white p-4 container flex items-center space-x-4">
        <div class="flex items-center text-lg bg-slate-800 text-white py-1 px-2">
            <label for="station-dropdown">📡 </label>
            <select
                id="station-dropdown"
                class="block px-2"
                bind:value={station.selected}
                on:change={handleStationChange}
            >
                {#each station.options as { value, label }}
                    <option value={value}>{label}</option>
                {/each}
            </select>
        </div>

        <div class="flex items-center text-lg bg-slate-800 text-white py-1 px-2">
            <label for="timeperiod-dropdown">⏰ </label>
            <select
                id="timeperiod-dropdown"
                class="block px-2"
                bind:value={timePeriod.selected}
                on:change={handleTimePeriodChange}
            >
                {#each timePeriod.options as { value, label }}
                    <option value={value}>{label}</option>
                {/each}
            </select>
        </div>
    </div>

    <div>
        <img src="http://{DEPLOYMENT_IP}:{DEPLOYMENT_PORT}/graphs/graph-last-24-hours.png" alt="graph of last 24 hours">
    </div>
</div>