export type PRIORITY = "LOW" | "HIGH"
type LOCATION = {
    lat: number
    lng: number
    name: string
    marker_icon: string
    priority: PRIORITY
}

export type LOCATIONS = LOCATION[]