const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

// const pkmnIds = pokémon.map( p => p.id )

// const divisibleBy3 = pokémon.filter( p => p.id % 3===0 );
// console.log(divisibleBy3);


// const fireType = pokémon.filter( p => p.types.includes("fire" ));
// console.log(fireType);

// const oneType = pokémon.filter( p => p.types[1]==null);
// console.log(oneType);

// const names = pokémon.map( p => p.name);
// console.log(names);

////////
//  const names = pokémon.map( p => p.id>99? p.name :  "");
//  console.log(names);

//  const names = pokémon.filter(p => p.id>99).map( p => p.name);
//  console.log(names);
////////

//  const poison = pokémon.filter(p => p.types.includes("poison")&&p.types.length==1).map(p => p.name);
//  console.log(poison);

 const poison2 = pokémon.filter(p => p.types[1]==="flying").map(p => p.types[0]);
 console.log(poison2);

// const count = pokémon.filter(p =>p.types.includes("normal"))
// console.log(count.length);

















