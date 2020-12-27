import { User } from './models/User'

const user = new User({ name: 'filiks', age: 21 })
// update
user.set({ name: 'newphiliks' })

console.log(user.get('name'))
console.log(user.get('age'))