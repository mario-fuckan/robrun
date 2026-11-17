import type { LOCATIONS } from "./types"
import SmallHotel from "#lib/assets/icons/small_hotel.webp"
import Parking from "#lib/assets/icons/parking.webp"
import Cafe from "#lib/assets/icons/cafe.webp"
import StripClub from "#lib/assets/icons/strip_club.webp"
import Alcohol from "#lib/assets/icons/alcohol_shop.webp"
import Jewelry from "#lib/assets/icons/jewelry_shop.webp"
import GunShop from "#lib/assets/icons/gun_shop.webp"
import Armory from "#lib/assets/icons/armory.webp"
import Pharmacy from "#lib/assets/icons/pharmacy.webp"
import Electronics from "#lib/assets/icons/computer_store.webp"
import GrandHotel from "#lib/assets/icons/grand_hotel.webp"
import Cottage from "#lib/assets/icons/house.webp"
import PoliceStation from "#lib/assets/icons/police_station.webp"
import Hospital from "#lib/assets/icons/hospital.svg"
import Gallery from "#lib/assets/icons/art_gallery.webp"
import Bank from "#lib/assets/icons/bank.webp"
import GasStation from "#lib/assets/icons/gas_station.webp"
import Helipad from "#lib/assets/icons/helipad.webp"
import Fence from "#lib/assets/icons/fence.webp"
import Cargo from "#lib/assets/icons/cargo.webp"

export const locations: LOCATIONS = [
    {
        lat: 680,
        lng: 3460,
        name: "GUN SHOP: EAST",
        marker_icon: GunShop,
        priority: "LOW"
    },
    {
        lat: 681,
        lng: 3111,
        name: "EQUIPMENT STORE: EAST",
        marker_icon: Armory,
        priority: "LOW"
    },
    {
        lat: 968,
        lng: 3129,
        name: "FENCE",
        marker_icon: Fence,
        priority: "HIGH"
    },
    {
        lat: 1186,
        lng: 3261,
        name: "JEWELRY STORE: EAST",
        marker_icon: Jewelry,
        priority: "LOW"
    },
    {
        lat: 1157,
        lng: 2886,
        name: "RUSTY BURGERS CAFÉ",
        marker_icon: Cafe,
        priority: "LOW"
    },
    {
        lat: 1358,
        lng: 3523,
        name: "CONVENIENCE STORE",
        marker_icon: Alcohol,
        priority: "LOW"
    },
    {
        lat: 1563,
        lng: 3473,
        name: "SMUGGLER'S VAN",
        marker_icon: Cargo,
        priority: "HIGH"
    },
    {
        lat: 1376,
        lng: 3219,
        name: "PHARMACY",
        marker_icon: Pharmacy,
        priority: "LOW"
    },
    {
        lat: 1408,
        lng: 2867,
        name: "GAS STATION",
        marker_icon: GasStation,
        priority: "LOW"
    },
    {
        lat: 1882,
        lng: 3687,
        name: "CONVENIENCE STORE",
        marker_icon: Alcohol,
        priority: "LOW"
    },
    {
        lat: 1774,
        lng: 3320,
        name: "FENCE",
        marker_icon: Fence,
        priority: "HIGH"
    },
    {
        lat: 1804,
        lng: 2804,
        name: "ELECTRONICS STORE",
        marker_icon: Electronics,
        priority: "LOW"
    },
    {
        lat: 2226,
        lng: 3179,
        name: "LOOTY BAY BANK",
        marker_icon: Bank,
        priority: "HIGH"
    },
    {
        lat: 651,
        lng: 3263,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1316,
        lng: 3741,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1174,
        lng: 3123,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1298,
        lng: 2907,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1588,
        lng: 3393,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1828,
        lng: 3640,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 2223,
        lng: 2909,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 667,
        lng: 2099,
        name: "ART GALLERY",
        marker_icon: Gallery,
        priority: "HIGH"
    },
    {
        lat: 1074,
        lng: 2233,
        name: "HOSPITAL",
        marker_icon: Hospital,
        priority: "LOW"
    },
    {
        lat: 1058,
        lng: 1939,
        name: "POLICE STATION",
        marker_icon: PoliceStation,
        priority: "HIGH"
    },
    {
        lat: 746,
        lng: 2096,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 936,
        lng: 2174,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 968,
        lng: 1939,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1446,
        lng: 1911,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1129,
        lng: 1770,
        name: "HELIPAD",
        marker_icon: Helipad,
        priority: "LOW"
    },
    {
        lat: 1593,
        lng: 1801,
        name: "HELIPAD",
        marker_icon: Helipad,
        priority: "LOW"
    },
    {
        lat: 1223,
        lng: 964,
        name: "SMUGGLER'S VAN",
        marker_icon: Cargo,
        priority: "HIGH"
    },
    {
        lat: 493,
        lng: 1247,
        name: "FENCE",
        marker_icon: Fence,
        priority: "HIGH"
    },
    {
        lat: 2493,
        lng: 1816,
        name: "FENCE",
        marker_icon: Fence,
        priority: "HIGH"
    },
    {
        lat: 2580,
        lng: 991,
        name: "NOBLE'S MANSION",
        marker_icon: Cottage,
        priority: "LOW"
    },
    {
        lat: 2693,
        lng: 1199,
        name: "COTTAGE",
        marker_icon: Cottage,
        priority: "LOW"
    },
    {
        lat: 2512,
        lng: 1179,
        name: "COTTAGE",
        marker_icon: Cottage,
        priority: "LOW"
    },
    {
        lat: 2480,
        lng: 1325,
        name: "COTTAGE",
        marker_icon: Cottage,
        priority: "LOW"
    },
    {
        lat: 2700,
        lng: 1359,
        name: "COTTAGE",
        marker_icon: Cottage,
        priority: "LOW"
    },
    {
        lat: 2653,
        lng: 1537,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1965,
        lng: 1449,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1191,
        lng: 1353,
        name: "ELECTRONICS STORE",
        marker_icon: Electronics,
        priority: "LOW"
    },
    {
        lat: 1701,
        lng: 1100,
        name: "GRAND HOTEL",
        marker_icon: GrandHotel,
        priority: "HIGH"
    },
    {
        lat: 950,
        lng: 1262,
        name: "SEASONS HOTEL",
        marker_icon: SmallHotel,
        priority: "LOW"
    },
    {
        lat: 981,
        lng: 1000,
        name: "REEF HOTEL",
        marker_icon: SmallHotel,
        priority: "LOW"
    },
    {
        lat: 925,
        lng: 1309,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 555,
        lng: 1277,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1822,
        lng: 740,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 325,
        lng: 1134,
        name: "OCEAN BREEZE CAFÉ",
        marker_icon: Cafe,
        priority: "LOW"
    },
    {
        lat: 983,
        lng: 687,
        name: "STRIP CLUB",
        marker_icon: StripClub,
        priority: "LOW"
    },
    {
        lat: 1113,
        lng: 675,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1217,
        lng: 1044,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1306,
        lng: 936,
        name: "CONVENIENCE STORE",
        marker_icon: Alcohol,
        priority: "LOW"
    },
    {
        lat: 1381,
        lng: 953,
        name: "PARKING",
        marker_icon: Parking,
        priority: "LOW"
    },
    {
        lat: 1373,
        lng: 835,
        name: "JEWELRY STORE: WEST",
        marker_icon: Jewelry,
        priority: "LOW"
    },
    {
        lat: 1140,
        lng: 1163,
        name: "GUN SHOP: WEST",
        marker_icon: GunShop,
        priority: "LOW"
    },
    {
        lat: 1288,
        lng: 1205,
        name: "EQUIPMENT STORE: WEST",
        marker_icon: Armory,
        priority: "LOW"
    },
    {
        lat: 1176,
        lng: 1299,
        name: "PHARMACY",
        marker_icon: Pharmacy,
        priority: "LOW"
    }
]