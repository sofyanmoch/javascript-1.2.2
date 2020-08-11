const searchName = (key,limit,callback) => {
let name = ['Abigail','Alexandra','Alison','Amanda', 'Angela','Bella','Carol','Caroline','Carolyn','Deirdre',       'Diana','Elizabeth','Ella','Faith','Olivia','Penelope']
        let lowName = name.map(t => t.toLowerCase())
            let result = lowName.filter(n => n.includes(key))
                result.length = limit ;
            return callback(result)}
        const showName = (hasil) => {return hasil}
console.log(searchName('an',2,showName))