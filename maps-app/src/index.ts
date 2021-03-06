/// <reference types="@types/googlemaps" />
import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './customMap'

const user = new User();
const company = new Company();
// instance from customMap with id of document. 
const customMap = new CustomMap('map')

// console.log(company);
// console.log(user);
// const mapDiv = document.getElementById('map') as HTMLElement;

customMap.addMarker(user);
customMap.addMarker(company);

// instance of map of google.Map
// new google.maps.Map(mapDiv, {
  // zoom: 1,
  // center: {lat: 0, lng: 0 },
// })
// 

