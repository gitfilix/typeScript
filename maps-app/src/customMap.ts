// customized Map: we want to limit the access and the functionality of full googleMap access 
// to only certain methods - to prevent accidently break the application.
// we are pretending: other programmers have not access to this file:
import { User } from './User';
import { Company } from './Company'

// interface for all Markers on a map: Instruction to every other Class
// on how they can be an argument to 'addMarker'
interface Mappabe {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom:1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  // good immplementation: mappable req interface Mappable to satisfy valid AddMarker 'syntax' 
  addMarker(mappable: Mappabe): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    })
  }
}

