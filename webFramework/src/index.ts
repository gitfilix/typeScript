import { User } from './models/User'

const user = new User({ name: 'filiks', age: 21 })
// update
user.set({ name: 'newphiliks' })

user.on('change', ()=> {
  
})

user.on('hoverme', ()=> {
  
})



console.log(user)