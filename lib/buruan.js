import fs from 'fs'

//let _hasilBuruan = JSON.parse(fs.readFileSync('./database/hasil_buruan.json'))
  
export const addInventoriBuruan = (sender,_hasilBuruan) => {
        const obj = {id: sender, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0}
         _hasilBuruan.push(obj)
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
   }
export const cekDuluHasilBuruanNya = (sender,_hasilBuruan) => {
            let status = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    status = true
                }
            })
            return status
        }
export const addAyam = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam += amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const kurangAyam = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ayam -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const getAyam = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ayam
            }
        }    
export const addIkan = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan += amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const kurangIkan = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].ikan -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const getIkan = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].ikan
            }
       }      
export const addKelinci = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci += amount
//s.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
 export const kurangKelinci = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].kelinci -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
 export const getKelinci = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].kelinci
            }
        }     
export const addDomba = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba += amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const kurangDomba = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].domba -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const getDomba = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].domba
            }
        } 
export const addSapi = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi += amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const kurangSapi = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].sapi -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const getSapi = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].sapi
            }
        }     
export const addGajah = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah += amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const kurangGajah = (sender, amount,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _hasilBuruan[position].gajah -= amount
//fs.writeFileSync('./database/hasil_buruan.json', JSON.stringify(_hasilBuruan))
            }
        }
export const getGajah = (sender,_hasilBuruan) => {
            let position = false
            Object.keys(_hasilBuruan).forEach((i) => {
                if (_hasilBuruan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _hasilBuruan[position].gajah
            }
        }     
        

  