<script lang="ts">
    import "leaflet/dist/leaflet.css"
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
    import LootyBay from "#lib/assets/maps/lootybay.png"
    import HotelIcon from "#lib/assets/icons/hotel.png"

    const handleClick = (e: LeafletMouseEvent) => {
        console.log(Math.round(e.latlng.lat), Math.round(e.latlng.lng))
    }

    const mapActions: Attachment<HTMLElement> = (e) => {
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

        imageOverlay(LootyBay, bounds).addTo(map)

        map.fitBounds(bounds)

        const m1 = marker([951, 1263], {
            icon: icon({
                iconUrl: HotelIcon,
                iconSize: [25, 25]
            })
        }).addTo(map)

        m1.bindTooltip("Seasons Hotel", {
            permanent: true,
            direction: "bottom",
            offset: [0, 20]
        })

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