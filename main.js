

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