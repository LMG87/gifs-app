import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { gifListComponent } from '@gifs/components/gif-list/gif-list.component';

@Component({
  selector: 'app-history',
  imports: [gifListComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export default class HistoryComponent {
  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'])),
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
