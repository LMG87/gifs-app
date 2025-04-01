import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '@gifs/interfaces/gifs.interfaces';
import { GifService } from '@gifs/services/gifs.service';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterModule],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css',
})
export class SideMenuOptionsComponent {
  gifService = inject(GifService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
