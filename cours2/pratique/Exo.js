//2.7.c

const personne = {
	nom:"Pedro Loco",
	age:34,
	profession:"Développeur",
	sePresenter() {
		console.log(`Bonjour, je suis${this.nom}, j’ai${this.age} ans et je suis${this.profession}.`);
	  },
};

personne.sePresenter();


// 2.7.d
const nombres = [2,4,6,8];

// 1. Multiplier chaque nombre par 2
const nombresDoubles = nombres.map((nombre) => nombre *2);
console.log(nombresDoubles);// [4, 8, 12, 16]

// 2. Filtrer les nombres supérieurs à 5
const nombresFiltres = nombres.filter((nombre) => nombre >5);
console.log(nombresFiltres);// [6, 8]

// 3. Calculer la somme des nombres
const somme = nombres.reduce((acc, nombre) => acc + nombre,0);
console.log(somme);// 20


//2.7.e.h

// 1. Déstructuration d'un tableau
const coordonnees = [48.8566,2.3522];
const [lat, long] = coordonnees;
console.log(lat, long);// 48.8566 2.3522

// 2. Déstructuration d'un objet imbriqué
const personne = {
nom:"Pedro Almodovar",
age:34,
adresse: {
rue:"123 Calle de los muertos",
ville:"Barcelone"
  }
};

const {nom: nomComplet, age,adresse: { ville } } = personne;
console.log(nomComplet, age, ville);
// Résultat : "Pedro Jakubowski 34 Paris"