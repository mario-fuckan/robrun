<script lang="ts">
    import type { Attachment } from "svelte/attachments"
    import {
        Map as LeafletMap,
        CRS,
        marker,
        icon,
        imageOverlay,
        type LatLngBoundsExpression,
        type LeafletMouseEvent
    } from "leaflet"
    import { locations } from "#lib/other/data.ts"
    import LootyBay from "#lib/assets/maps/lootybay.webp"

    const handleClick = (e: LeafletMouseEvent) => {
        console.log(Math.round(e.latlng.lat), Math.round(e.latlng.lng))
    }

    const mapActions: Attachment<HTMLElement> = (e) => {
        const setupLocations = (): void => {
            for (const { lat, lng, name, marker_icon } of locations) {
                const item = marker([lat, lng], {
                    icon: icon({
                        iconUrl: marker_icon,
                        iconSize: [25, 25]
                    })
                }).addTo(map)

                item.bindTooltip(name, {
                    permanent: true,
                    direction: "bottom",
                    offset: [0, 20]
                })
            }
        }

        const map = new LeafletMap(e, {
            crs: CRS.Simple,
            minZoom: -3,
            maxZoom: 1,
            zoomSnap: 0
        })

        map.addEventListener("click", handleClick)

        map.attributionControl.setPrefix(false)

        const bounds: LatLngBoundsExpression = [
            [0, 0],
            [3355, 4096]
        ]

        imageOverlay(LootyBay, bounds, {
            className: "meow"
        }).addTo(map)

        map.fitBounds(bounds)

        setupLocations()

        return () => {
            map.removeEventListener("click", handleClick)
            map.remove()
        }
    }
</script>

<div class="map" {@attach mapActions}></div>

<style>
    .map {
        width: 100%;
        height: 100vh;
    }
</style>