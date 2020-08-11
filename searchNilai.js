const searchNilai = (nilaiAwal,nilaiAkhir,dataArray) => {
        let result
        if(nilaiAwal > nilaiAkhir){ result = "nilai akhir harus lebih besar dari nilai awal"}
        else{
            let x = dataArray.length
            if(x < 5 ){ result = "data Array kurang dari 5"}
            else{ let filterNilai = dataArray.filter(i => {return i > nilaiAwal && i < nilaiAkhir})
                if(filterNilai.length == 0){ result = `Tidak ada yang sesuai`}
                else{ result = filterNilai}
                }
            }
        console.log(result)
        }

searchNilai(21,11,[8,17,14,7,3])
