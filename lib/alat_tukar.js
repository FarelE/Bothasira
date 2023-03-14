import "../settings.js"
import fs from 'fs'
import toMs from 'ms'
 

let besiAwal = rpg.besiawal
let goldAwal = rpg.goldawal
let emeraldAwal = rpg.emeraldawal
let umpanAwal = rpg.umpanawal
let potionAwal = rpg.potionawal


export const addInventori = (sender, _inventoryOrang) => {
  let  obj = {id: sender, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal}
  
_inventoryOrang.push(obj)

   }

export const  cekInventoryAdaAtauGak = (sender, _inventoryOrang) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
export const  addBesi = (sender, amount, _inventoryOrang) => {
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
 export const  kurangBesi = (sender, amount, _inventoryOrang) => {
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
 export const  getBesi = (sender, _inventoryOrang) => {
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
export const  addEmas = (sender, amount, _inventoryOrang) => {
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
 export const  kurangEmas = (sender, amount, _inventoryOrang) => {
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
 export const  getEmas = (sender, _inventoryOrang) => {
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
export const  addEmerald = (sender, amount, _inventoryOrang) => {
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
 export const  kurangEmerald = (sender, amount, _inventoryOrang) => {
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
 export const  getEmerald = (sender, _inventoryOrang) => {
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
        
export const  addUmpan = (sender, amount, _inventoryOrang) => {
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
 export const  kurangUmpan = (sender, amount, _inventoryOrang) => {
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
 export const  getUmpan = (sender ,_inventoryOrang) => {
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
export const  addPotion = (sender, amount, _inventoryOrang) => {
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
 export const  kurangPotion = (sender, amount, _inventoryOrang) => {
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
 export const  getPotion = (sender, _inventoryOrang) => {
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
