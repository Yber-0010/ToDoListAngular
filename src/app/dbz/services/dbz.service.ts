import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    name: 'krilling',
    power: 1000
  },{
    name: 'goku',
    power: 9500
  }, {
    name: 'vegeta',
    power: 7500
  }];

  onNewCharacter( character: Character):void {
    this.characters.push(character);
  }
  onDeleteCharacterByIndex(index: number):void {
    this.characters.splice(index,1)
  }

}
