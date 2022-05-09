import handler from "./exp-profile.js"

const roles = {
  /*
  'Nombre del rol': <Nivel mínimo para obtener este rol>
  */
  'Principiante': 0,
  'Pajero del grupo': 100,
  'Ciudadano responsable': 200,
  'Politico corrupto': 300,
  'Dueño de oxxo': 400,
  'Explotador de asalariados': 500,
  'Maestro del sexo': 600,
  'Maestro de la galaxia': 800,
  'Leyenda del grupo': 9000,
  'Dios del grupo': 9000000
}

handler.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}

// odin estuvo aqui