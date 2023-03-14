import fs from 'fs'
import toMs from 'ms'
//let register = JSON.parse(fs.readFileSync('./database/register.json'))

export const addRegist = (sender, pushname, _register) => { 
const obj = {  id: sender, name: pushname }
_register.push(obj)
//fs.writeFileSync('./database/register.json', JSON.stringify(register))
}


export const cekRegist = (sender, _register) => {
let status = false
Object.keys(_register).forEach((i) => {
if (_register[i].id === sender) {
status = true
}
})
return status
}


export const getRegist = (sender, _register) => {
let status = false
  Object.keys(_register).forEach((i) => {
		if (_register[i].id === sender) {
			status = _register[i]
		}
	})
 return status
}


export const delRegist = (sender, _register) => {
let status = false
Object.keys(_register).forEach((i) => {
	if (_register[i].id === sender) {
		_register.splice(i, 1)
		status = true
	}
})
return status
}

export const getRegistById = (id, _register) => {
let status = false
  Object.keys(_register).forEach((i) => {
		if (_register[i].id === sender) {
			status = _register[i]
		}
	})
 return status
}

 


