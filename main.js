

class MsPokeBowl{
    constructor(){
        
        this.pokemonArray = []; 
    }

     all(){
         return this.pokemonArray;
     }

     get(name){
         
         for(let i=0; i<this.pokemonArray.length; i++){
             if(this.pokemonArray[i].pokemonName === name){
                 return this.pokemonArray[i];
            }
         }
     }

     add(pokemonObject){
         this.pokemonArray.push(pokemonObject);

     }
}

class Pokemon {
    constructor (pokemonName, hp,attack,defense,abilities,image){
        this.pokemonName = pokemonName
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities 
        this.image = image
    }   
}

//use api to get info

let outsideContainer = document.getElementById('container')
let statusContainer = document.getElementById('status-container')
let pokemonContainer = document.getElementById('pokemon-container')

let nameInfo = document.createElement('p');
let hpInfo = document.createElement('p');
let attackInfo = document.createElement('p');
let defenseInfo = document.createElement('p');
let abilitiesInfo = document.createElement('p');

hpInfo.className = "status"
attackInfo.className = "status"
defenseInfo.className = "status"
abilitiesInfo.className = "status"

pokemonContainer.appendChild(nameInfo);
statusContainer.appendChild(hpInfo);
statusContainer.appendChild(attackInfo);
statusContainer.appendChild(defenseInfo);
statusContainer.appendChild(abilitiesInfo);


let createImg = document.createElement('img');
createImg.id = "pokemonPic"

//set each pokemon name to id
//create function with axios
//replace the id number with the new id number
//display that info

let searchPokemon = (pokemonId)=>{

if (pokemonId === "misdreavus"){
    pokemonId = 200;
} else if (pokemonId === "diglett"){
    pokemonId = 50;
} else if (pokemonId === "smoochum"){
    pokemonId = 238;
}

axios.get('https://pokeapi-nycda.firebaseio.com/pokemon/' + pokemonId + '.json').then((response)=>{
    console.log(response.data);

    //then create instance using info

    let data=response.data;
    


    let newPokemon = new Pokemon (
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name,
        data.sprites.front_default,
    )
     console.log (newPokemon);


     //displaying info 

 nameInfo.innerText = data.name;
 nameInfo.id = "nameText";


 hpInfo.innerText = "HP: " + data.stats[5].base_stat;


 attackInfo.innerText= "Attack: " + data.stats[4].base_stat;


 defenseInfo.innerText= "Defense: " + data.stats[3].base_stat;


 abilitiesInfo.innerText = "Abilities: " + data.abilities[0].ability.name;




 //display pic
 createImg.setAttribute('src',data.sprites.front_default);

pokemonContainer.appendChild(createImg);
})

}

//create submit form
let submitForm = document.getElementById('search-form')

submitForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let pokemonId = document.getElementById('search-value').value

    searchPokemon(pokemonId);
})