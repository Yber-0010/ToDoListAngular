import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacterByIndex: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterlist: Character[] = [{
    name: 'trunks',
    power: 10
  }]

  onDeleteCharacter(index:number):void {
    console.log({index});
    this.onDeleteCharacterByIndex.emit(index);
  }
}
