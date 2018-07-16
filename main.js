

class Trainer{
    constructor(trainerName){
        this.trainerName = trainerName;
        this.pokemonArray = []; 
    }

     all(){
         return this.pokemonArray;
     }

     get(name){
         
         for(let i=0; i<this.pokemonArray.length; i++){
             if(this.pokemonArray[i].pokeName === name){
                 return this.pokemonArray[i];
            }
         }
     }

     add(pokemonObject){
         this.pokemonArray.push(pokemonObject);

     }
}

class Pokemon {
    constructor (pokemonName, hp,attack,defense,abilities){
        this.pokemonName = pokemonName
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities 
    }   
}

//use api to get info

let outsideContainer = document.getElementById('container')
let statusContainer = document.getElementById('status-container')



axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/200.json").then((response)=>{
    console.log(response.data);

    //then create instance using info

    let data=response.data;
    


    let misdreavus = new Pokemon (
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities[0].ability.name,
    )
     console.log (misdreavus);



     //displaying info 

    let nameInfo = document.createElement('p');
    let hpInfo = document.createElement('p');
    let attackInfo = document.createElement('p');
    let defenseInfo = document.createElement('p');
    let abilitiesInfo = document.createElement('p');

   nameInfo.innerText = data.name;

 statusContainer.appendChild(nameInfo);



})

