module.exports = function () {
  var data = {
    asesores: [
      {
        id:1,
        ape: "Quispe Villcas",
        nom: "Aldair Emerson",
        tel:"972136515",
        correo:"blackaldair05@gmail.com",
        arch:"c://documents/aldair.pdf",
      },
      {
        id:2,
        ape: "Aña",
        nom: "UWU",
        tel:"972136515",
        correo:"aasdd@gmail.com",
        arch:"c://a",
      },
      {
        id:3,
        ape: "Lau",
        nom: "Pedro",
        tel:"972136515",
        correo:"dasdas@gmail.com",
        arch:"c://a",
      },
      {
        id:4,
        ape: "Manco",
        nom: "Lucas",
        tel:"972136515",
        correo:"dasdas@gmail.com",
        arch:"c://a",
      }
    ],
    vaccines:[
      {
        id: 1,
        descriptionVaccine: "vacuna01",
	   observationVaccine: "Fiebre",
        dateVaccine: "2022-09-09",
        pet:
        {
          id:1,
          namePet: "Toby",
          birthDatePet: "2020-10-03",
          genderPet:"Macho",
        }
      },
    ]
  }
  return data
}
