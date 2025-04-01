import { Component, input } from '@angular/core';
import { gifListItemComponent } from './gif-list-item/gif-list-item.component';
import { Gif } from '@gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'gif-list',
  imports: [gifListItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css',
})
export class gifListComponent {
  gifs = input.required<Gif[]>();
}
