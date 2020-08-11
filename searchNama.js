const searchName = (key,limit,callback) => {
let name = ['Abigail','Alexandra','Alison','Amanda', 'Angela','Bella','Carol','Caroline','Carolyn','Deirdre',       'Diana','Elizabeth','Ella','Faith','Olivia','Penelope']
        let result = name.filter(t => t.toLowerCase().includes(key))
                result.length = limit; return callback(result)}
        const showName = (hasil) => {return hasil}
console.log(searchName('an',3,showName))