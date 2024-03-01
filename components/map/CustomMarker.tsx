import L from "leaflet";
import { Marker } from "react-leaflet";

// @ts-ignore
function CustomMarker({ lat, long, address, price, onClick }) {

    if (price == null) {
        price = "<div style=\"position: absolute; top: -37%; width: 80%; font-size: 40px; text-align: center; color:white; font-family: sans-serif;\">" +"•"
      }else{
        price = "<div style=\"position: absolute; top: 18%; width: 80%; text-align: center; color:white; font-family: sans-serif;\">$" + price
      }

    const customMarkerIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<div style="position: relative;height: 38px; width: 39px;transform: translateY(-20px) ;">\
         <img style="height: 38px; width: 39px;" src="/pins/ActiveSpot.png" alt="Active Spot"> \
         ${price}</div> </div>`
    });

    return (
        <Marker
            position={[lat, long]}
            icon={customMarkerIcon}
            eventHandlers={{ click: () => onClick(address) }}
        />
    )
}

export default CustomMarker;
