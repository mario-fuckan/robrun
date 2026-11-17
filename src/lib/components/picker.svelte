<script lang="ts">
    let { picker_choice = $bindable() } = $props()

    const maps = [
        {
            value: "LOOTY_BAY",
            display: "Looty Bay"
        },
        {
            value: "LENNYS_MOTEL",
            display: "Lenny's Motel"
        },
        {
            value: "WORLD_MAP",
            display: "World Map"
        }
    ]
</script>

<select id="map" bind:value={picker_choice}>
    {#each maps as { value, display }}
        <option {value} disabled={picker_choice === value}>{display}</option>
    {/each}
</select>

<style>
    ::picker(select) {
        appearance: base-select;
        border: none;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    select {
        min-width: 200px;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 999;
        font-size: 0.9rem;
        padding: 1rem 1.4rem;
        outline: none;
        border: none;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background: black;
        color: white;
        cursor: pointer;
        appearance: base-select;
    }

    select:open {
        border-bottom-left-radius: 0rem;
        border-bottom-right-radius: 0rem;
    }

    select::picker-icon {
        color: lawngreen;
        transition: 0.3s rotate;
    }

    select:open::picker-icon {
        rotate: 180deg;
    }

    option {
        list-style: none;
        padding: 1rem;
        color: white;
        background-color: black;
    }

    option:disabled {
        color: grey;
        background: #333;
    }

    option::checkmark {
        display: none;
    }
</style>