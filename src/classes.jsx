import React, {Component} from 'react';


class Animal  {

    constructor(species,name){
       this.name = name
       this.species = species
    }
    
   eat() {
       return 'eating...';
   }
   run = () => 'running...'
   sleep = () => 'sleeping...'
}

const dog = new Animal('dog', 'Doggo');


console.log(dog)
