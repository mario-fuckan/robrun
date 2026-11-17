<script lang="ts">
    import Map from "#lib/components/map.svelte"
    import Picker from "#lib/components/picker.svelte"

    let picker_choice = $state<"LOOTY_BAY" | "LENNYS_MOTEL" | "WORLD_MAP">("LOOTY_BAY")
</script>

<svelte:head>
    <title>Rob Run - Map</title>
</svelte:head>

<main>
    <Picker bind:picker_choice />

    {#if picker_choice === "LOOTY_BAY"}
        <Map />
    {:else if picker_choice === "LENNYS_MOTEL"}
        Nothing yet
    {:else}
        Nothing yet
    {/if}
</main>

<style>
    main {
        position: relative;
    }
</style>