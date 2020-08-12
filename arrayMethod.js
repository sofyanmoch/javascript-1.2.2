const buah = ['Apel','Mangga','Jambu','Manggis','Lemon']
const rev = ['saya','belajar','tidur']
const name = 'LaRaveLia'
str = 'buah setelah'

console.log(`buah = ${buah}`)
console.log(`--- built in functions ---`)
//tambahkan buah
buah.push('pir') ;
console.log(`${str} push()  = ${buah}`)

//hapus indeks ke terakhir
buah.pop()
console.log(`${str} pop() = ${buah}`)

//hapus indeks awal
buah.shift()
console.log(`${str} shift() = ${buah}`)

//unshift
buah.unshift('Apel')
console.log(`${str} unshift() = ${buah}` )

// //sort - sortir
buah.sort()
console.log(`${str} sort() = ${buah}`)

//toLower
console.log(name.toLowerCase())

//toUpperCase
console.log(name.toUpperCase())

//includes
let adaLemon = buah.includes('Lemon')
console.log(`Ada lemon? = ${adaLemon}`)

// filter
const nilai = [2,4,3,6,5,3,2,8,7]
let flt = nilai.filter(i => {return i>5})
console.log(`filter = ${flt}`)

//reverse
let reverseArr = rev.reverse()
console.log(reverseArr)