<script lang="ts">
    import type { Attachment } from "svelte/attachments"
    import {
        Map as LeafletMap,
        CRS,
        marker,
        icon,
        imageOverlay,
        type LatLngBoundsExpression,
        type LeafletMouseEvent,
        type LeafletEvent,
        type Marker
    } from "leaflet"
    import { locations } from "#lib/other/data.ts"
    import LootyBay from "#lib/assets/maps/lootybay.webp"

    const mapActions: Attachment<HTMLElement> = (e) => {
        // EventListener functions
        const handleClick = (e: LeafletMouseEvent) => {
            console.log(Math.round(e.latlng.lat), Math.round(e.latlng.lng))
        }

        const handleZoom = (e: LeafletEvent) => {
            const zoom: number = e.target._zoom

            if (zoom < -0.8) {
                for (const marker of markers) {
                    const marker_element = marker.getElement()

                    if (marker_element?.classList.contains("LOW")) {
                        marker.setOpacity(0)
                        marker.closeTooltip()
                    }
                }
            } else {
                for (const marker of markers) {
                    marker.setOpacity(1)
                    marker.openTooltip()
                }
            }
        }

        // Setup functions
        const setupLocations = (): void => {
            for (const { lat, lng, name, marker_icon, priority } of locations) {
                const item = marker([lat, lng], {
                    icon: icon({
                        iconUrl: marker_icon,
                        iconSize: [25, 25],
                        className: priority
                    })
                }).addTo(map)

                item.bindTooltip(name, {
                    permanent: true,
                    direction: "bottom",
                    offset: [0, 20]
                })

                markers.push(item)
            }
        }

        // Map setup
        const map = new LeafletMap(e, {
            crs: CRS.Simple,
            minZoom: -3,
            maxZoom: 1,
            zoomSnap: 0,
            attributionControl: false,
            zoomControl: false
        })

        let markers: Marker[] = []

        const bounds: LatLngBoundsExpression = [
            [0, 0],
            [3355, 4096]
        ]

        imageOverlay(LootyBay, bounds).addTo(map)

        map.fitBounds(bounds)

        setupLocations()

        // Map eventListeners
        map.addEventListener("click", handleClick)
        map.addEventListener("zoom", handleZoom)

        return () => {
            // Cleanup
            map.removeEventListener("click", handleClick)
            map.removeEventListener("zoom", handleZoom)
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