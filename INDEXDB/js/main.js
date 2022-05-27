//create database
const db=new Dexie('myBbStore')
db.version(1).stores({
    friends:'name,age'
})

db.open