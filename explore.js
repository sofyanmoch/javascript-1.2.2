//filter & includes

function searchName(key){
    let name = ['sofyan','zulfi','wafi','arlan','rijak','septis','ikbal','emin','pani','risdi']
    let nama = name.filter( i => i.includes(key)) //callback
    return nama;
}

console.log(searchName('an'))
//withOutLimit

