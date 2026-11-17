<script lang="ts">
    import type { LayoutProps } from "./$types"
    import "leaflet/dist/leaflet.css"
    import "#lib/css/global.css"
    import favicon from "#lib/assets/favicon.svg"

    let { children }: LayoutProps = $props()
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}