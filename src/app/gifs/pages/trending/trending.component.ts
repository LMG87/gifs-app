import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { GifService } from '@gifs/services/gifs.service';
import { ScrollStateService } from '../../services/scroll-state.service';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export default class TrendingComponent implements AfterViewInit {
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
