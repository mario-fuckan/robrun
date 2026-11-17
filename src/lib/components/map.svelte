<script lang="ts">
    import type { Attachment } from "svelte/attachments"
    import {
        Map as LeafletMap,
        CRS,
        marker,
        icon,
        imageOverlay,
        layerGroup,
        type LatLngBoundsExpression,
        type LeafletMouseEvent
    } from "leaflet"
    import { locations } from "#lib/other/data.ts"
    import LootyBay from "#lib/assets/maps/lootybay.webp"

    const mapActions: Attachment<HTMLElement> = (e) => {
        // EventListener functions
        const handleClick = (e: LeafletMouseEvent) => {
            console.log(Math.round(e.latlng.lat), Math.round(e.latlng.lng))
        }

        const handleZoom = () => {
            const zoom: number = map.getZoom()

            if (zoom < -0.8) {
                lowLayer.removeFrom(map)
            } else {
                lowLayer.addTo(map)
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
                })

                item.bindTooltip(name, {
                    permanent: true,
                    direction: "bottom",
                    offset: [0, 20]
                })

                if (priority == "HIGH") {
                    item.addTo(highLayer)
                } else {
                    item.addTo(lowLayer)
                }
            }
        }

        const setupLayers = () => {
            highLayer.addTo(map)
            lowLayer.addTo(map)
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

        const lowLayer = layerGroup()
        const highLayer = layerGroup()

        const bounds: LatLngBoundsExpression = [
            [0, 0],
            [3355, 4096]
        ]

        imageOverlay(LootyBay, bounds).addTo(map)

        map.fitBounds(bounds)

        setupLocations()
        setupLayers()
        handleZoom()

        // Map eventListeners
        map.on("click", handleClick)
        map.on("zoom", handleZoom)

        return () => {
            // Cleanup
            map.off("click", handleClick)
            map.off("zoom", handleZoom)
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