const buah = ['Apel','Mangga','Jambu','Manggis','Lemon']
str = 'buah setelah'
console.log(`buah = ${buah}`)
//tambahkan buah
buah.push('pir') ;
console.log(`${str} push() = ${buah}`)

//hapus indeks ke terakhir
buah.pop()
console.log(`${str} pop() = ${buah}`)

//hapus indeks awal
buah.shift()
console.log(`${str} shift() = ${buah}`)

// //sort - sortir
buah.sort()
console.log(`${str} sort() = ${buah}`)

//includes
let adaLemon = buah.includes('Lemon')
console.log(`Ada lemon? = ${adaLemon}`)

// filter
const nilai = [2,4,3,6,5,3,2,8,7]
let flt = nilai.filter(i => {return i>5})
console.log(`filter = ${flt}`)