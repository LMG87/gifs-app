import { Component, inject, signal } from '@angular/core';
import { gifListComponent } from '@gifs/components/gif-list/gif-list.component';
import { Gif } from '@gifs/interfaces/gifs.interfaces';
import { GifService } from '@gifs/services/gifs.service';

@Component({
  selector: 'app-search',
  imports: [gifListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export default class SearchComponent {
  gifService = inject(GifService);
  Gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.Gifs.set(resp);
    });
  }
}
