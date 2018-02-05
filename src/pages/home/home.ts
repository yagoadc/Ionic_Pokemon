import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokemonProvider } from '../../providers/pokemon/pokemon'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemon = [];

  nextId: number;

  constructor(public navCtrl: NavController, public pokeProvider :
    PokemonProvider) {
    this.nextId = 0;
  }

  getPokemon() {
    this.nextId++;
    this.pokeProvider.getPokemon(this.nextId)
    .subscribe(
      (res) => {

        this.pokemon.push(res);
        console.log(res);
      }
    );
  }

}
