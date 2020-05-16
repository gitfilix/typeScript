// customized Map: we want to limit the access and the functionality of full googleMap access 
// to only certain methods - to prevent accidently break the application.

// we are pretending: other programmers have not access to this file:
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
}

