import "../settings.js"
import fs from 'fs'
import toMs from 'ms'

let besiAwal = rpg.besiawal
let goldAwal = rpg.goldawal
let emeraldAwal = rpg.emeraldawal
let umpanAwal = rpg.umpanawal
let potionAwal = rpg.potionawal



export const addInventori = (sender, _inventoryOrang) => {
     let obj = { id: sender, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal, ikan: 0, ayam: 0, kelinci: 0, domba: 0, sapi: 0, gajah: 0,  ikanGoreng: 0, ayamGoreng: 0, kelinciGoreng: 0, dombaGoreng: 0, sapiGoreng: 0, gajahGoreng: 0 }
         _inventoryOrang.push(obj)
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
   }
export const  cekInventoryAdaAtauGak = (sender,_inventoryOrang) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
export const  addBesi = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangBesi = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getBesi = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].besi
            }
        }     
export const  addEmas = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangEmas = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getEmas = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gold
            }
        }     
export const  addEmerald = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangEmerald = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getEmerald = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].emerald
            }
        }     
        
export const  addUmpan = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangUmpan = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getUmpan = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].umpan
            }
        }  
export const  addPotion = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangPotion = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getPotion = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].potion
            }
        }       
export const  addAyam = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayam += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangAyam = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayam -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getAyam = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ayam
            }
        }    
export const  addIkan = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikan += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangIkan = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikan -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getIkan = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ikan
            }
        }      
export const  addKelinci = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinci += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangKelinci = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinci -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getKelinci = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].kelinci
            }
        }     
export const  addDomba = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].domba += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangDomba = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].domba -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getDomba = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].domba
            }
        } 
  export const  addSapi = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapi += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangSapi = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapi -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getSapi = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].sapi
            }
        }     
                           
export const  addGajah = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajah += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangGajah = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajah -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getGajah = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gajah
            }
        }     
        
//================================================================================\\
export const  addIkanGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikanGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangIkanGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ikanGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getIkanGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ikanGoreng
            }
        }              
        
export const addAyamGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayamGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangAyamGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].ayamGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getAyamGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].ayamGoreng
            }
        }            
        
        export const  addKelinciGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinciGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangKelinciGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].kelinciGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getKelinciGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].kelinciGoreng
            }
        }     
        
       export const  addDombaGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].dombaGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangDombaGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].dombaGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getDombaGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].dombaGoreng
            }
        } 
        
 export const addSapiGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapiGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangSapiGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].sapiGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getSapiGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].sapiGoreng
            }
        }     
                           
export const  addGajahGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajahGoreng += amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  kurangGajahGoreng = (sender, amount,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gajahGoreng -= amount
//fs.writeFileSync('./database/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
 export const  getGajahGoreng = (sender,_inventoryOrang) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gajahGoreng
            }
        }     
                
        
        
                