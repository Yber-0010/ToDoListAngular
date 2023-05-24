import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.interface";

console.log(uuid())

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'manzanas',
    power: 10
  },{
    id: uuid(),
    name: 'peras',
    power: 9
  }, {
    id: uuid(),
    name: 'frutillas',
    power: 7
  }];

  onAddCharacter( character: Character):void {

    const newCharacter: Character = { id: uuid(), ...character}

    this.characters.push(newCharacter);

  }
  onDeleteCharacterById(id: string):void {
    this.characters = this.characters.filter( character => character.id !== id)
  }

}
