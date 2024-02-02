import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})

export class ListaPersonajesComponent {
  @Output() onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  @Input() titulo: string = '';
  @Input() personajes: Character[] = [];

  deleteCharacterById(idCharacter: string): void {
    this.onDeleteCharacter.emit(idCharacter);
  }
}
