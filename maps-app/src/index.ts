/// <reference types="@types/googlemaps" />
import { User } from './User'
import { Company } from './Company'

// const user = new User();
const company = new Company();
// 
console.log(company);
// console.log(user);
const mapDiv = document.getElementById('map') as HTMLElement;

new google.maps.Map(mapDiv, {
  zoom: 1,
  center: {lat: 0, lng: 0 },
})
