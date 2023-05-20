/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weght: 100,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weght: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weght: 90,
        height: 180,
    },

]

let patientsNames = []

for(let patient of patients){
    patientsNames.push(patient.name)
}

alert(patientsNames)