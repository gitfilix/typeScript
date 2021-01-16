
const profile = {
  firstname: 'alex',
  age: 20,
  coords: {
    lat: 0.43423,
    lng: 32.432
  },
  setAge(age: number): void {
    this.age = age
  }
}

const { age, firstname }: { age: number, firstname: string } = profile
const { coords: { lat, lng} }: {coords: {lat: number; lng: number} } = profile
