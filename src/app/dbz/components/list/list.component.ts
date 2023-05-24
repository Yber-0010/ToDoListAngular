import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterlist: Character[] = [{
    name: 'papaya',
    power: 1
  }]

  onDeleteCharacter(id?:string):void {
    if( !id ) return;
    console.log({id})
    this.onDeleteCharacterById.emit(id);
  }
}
