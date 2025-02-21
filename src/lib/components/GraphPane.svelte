<script>
    import { onDestroy, onMount } from "svelte";
    import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "../index.js";
    import { loadStations } from "$lib/utils.js";

    export let id;

    let paneData = {
        image: {
            src: null,
            reloadInterval: 5,
            interval: null
        },
        station: {
            selected: "RPIZ-ALEX",
            options: [
                { value: "RPIZ-ALEX", label: "Alex" }
            ]
        },
        timePeriod: {
            selected: "1d",
            options: [
                { value: "1d", label: "Last 24 hours" },
                { value: "1d-avg", label: "Last 24 hours compared to average of last 7 days" },
                { value: "7d", label: "Last 7 days" }
            ]
        }
    };

    function handleStationChange(event) {
      paneData.station.selected = event.target.value;
      paneData.image.src = getImageSrc();
    }

    function handleTimePeriodChange(event) {
      paneData.timePeriod.selected = event.target.value;
      paneData.image.src = getImageSrc();
    }

    function getImageSrc() {
        return `http://${DEPLOYMENT_IP}:${DEPLOYMENT_PORT}/graphs/${paneData.station.selected}-${paneData.timePeriod.selected}.png?t=${Date.now() % 1000000}`
    }

    function updateReloader() {
        if (paneData.image.interval != null) {
            clearInterval(paneData.image.interval);
        }

        paneData.image.interval = setInterval(() => {
            paneData.image.src = getImageSrc();
        }, 1000 * 60 * paneData.image.reloadInterval);
    }

    onMount(async () => {
        paneData.image.src = getImageSrc();
        updateReloader();

        const stations = await loadStations();
        
        if (stations != null) {
            paneData.station.options = stations.map(st => { return {
                value: st.id,
                label: `${st.name.replace("_", " ")} [${st.id}]`
            }});
        }
    });

    onDestroy(() => {
        clearInterval(paneData.image.interval);


    });
</script>

<div class="w-full xl:w-1/2 p-2 flex-col container" id="graphpane-{id}">
    <div class="bg-slate-600 text-white p-4 container flex items-center space-x-4">
        <div class="flex items-center text-lg bg-slate-800 py-1 px-2">
            <label for="station-dropdown">📡 </label>
            <select
                id="station-dropdown"
                class="block px-2"
                bind:value={paneData.station.selected}
                on:change={handleStationChange}
            >
                {#each paneData.station.options as { value, label }}
                    <option value={value}>{label}</option>
                {/each}
            </select>
        </div>

        <div class="flex items-center text-lg bg-slate-800 text-white py-1 px-2">
            <label for="timeperiod-dropdown">⏰ </label>
            <select
                id="timeperiod-dropdown"
                class="block px-2"
                bind:value={paneData.timePeriod.selected}
                on:change={handleTimePeriodChange}
            >
                {#each paneData.timePeriod.options as { value, label }}
                    <option value={value}>{label}</option>
                {/each}
            </select>
        </div>

        <button class="text-lg bg-slate-800 text-white py-1 px-2 ml-auto cursor-pointer" on:click={() => {paneData.image.src = getImageSrc()}}>
            ⟳
        </button>
    </div>

    <a href={paneData.image.src} target="_blank">
        <img src={paneData.image.src} alt="temperature/humidity/pressure graph">
    </a>
</div>
