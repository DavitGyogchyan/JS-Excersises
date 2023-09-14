const users = [
  {id: 1, name: 'Abel'}, 
  {id:2, name: 'Julia'},
  {id:3, name: 'Pedro'}, 
  {id:4, name: 'Amanda'}
]

const anacleto = users.map((obj) => {
  if(obj.name[0] === "A") return obj.name = 'Anacleto'
  
  else return obj.name
 
})

console.log(anacleto);





/// 

const nameUsers = users.map((persons) => {
  return persons.name.startsWith("A") ? {
      name: "Davit"
  } : {
      ...persons
  }
})
console.log(nameUsers)







