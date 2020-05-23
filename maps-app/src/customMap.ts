// customized Map: we want to limit the access and the functionality of full googleMap access 
// to only certain methods - to prevent accidently break the application.
// we are pretending: other programmers have not access to this file:
import { User} from './User';
import { Company } from './Company'


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

  // bad immplementation
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  // addCompanyMarker(company: Company): void {
    // new google.maps.Marker({
      // map: this.googleMap,
      // position: {
        // lat: company.location.lat,
        // lng: company.location.lng
      // }
    // });
  // }
}

