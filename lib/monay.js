import ("../settings.js")
import fs from 'fs'
import toMs from 'ms'  

//let _monayOrg = JSON.parse(fs.readFileSync('./database/monay.json'))  
export const  addInventoriMonay = (sender, _monayOrg) => {
       const  obj = {id: sender, monay: monayawal}
         _monayOrg.push(obj)
//fs.writeFileSync('./database/monay.json', JSON.stringify(_monayOrg))
   }
export const  cekDuluJoinAdaApaKagaMonaynyaDiJson = (sender, _monayOrg) => {
            let status = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
export const  addMonay = (sender, amount, _monayOrg) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay += amount
//fs.writeFileSync('./database/monay.json', JSON.stringify(_monayOrg))
            }
        }
 export const  kurangMonay = (sender, amount, _monayOrg) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _monayOrg[position].monay -= amount
//fs.writeFileSync('./database/monay.json', JSON.stringify(_monayOrg))
            }
        }
 export const  getMonay = (sender, _monayOrg) => {
            let position = false
            Object.keys(_monayOrg).forEach((i) => {
                if (_monayOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _monayOrg[position].monay
            }
        }     
        