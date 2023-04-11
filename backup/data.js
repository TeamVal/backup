module.exports = function () {
  var data = {
    lenguajes: [
      {
        id:1,
        desc: "Lenguaje de programación de alto nivel y orientado a objetos",
        abrev: ".j",
        tipoLeng:"Java",
      },
      {
        id:2,
        desc: "lenguaje de programación de alto nivel, multi-paradigma y orientado a objetos",
        abrev: ".c",
        tipoLeng:"C++",
      },
      {
        id:3,
        desc: "se utiliza en una amplia variedad de aplicaciones, desde aplicaciones web y móviles hasta ciencia de datos y aprendizaje automáticoad",
        abrev: ".py",
        tipoLeng:"Python",
      },
      {
        id:4,
        desc: "lenguaje de programación de alto nivel, orientado a objetos, desarrollado por Microsoft en el año 2000",
        abrev: ".py",
        tipoLeng:"C#",
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
