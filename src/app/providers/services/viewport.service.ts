import { Injectable, inject } from '@angular/core';
import { Observable, fromEvent, map, startWith } from 'rxjs';
import { WINDOW } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  private readonly WINDOW = inject(WINDOW);

  getWidth$(): Observable<number> {
    return fromEvent(this.WINDOW, 'resize').pipe(
      startWith(this.WINDOW.innerWidth),
      map((e: number | Event) => {
        const width = typeof e === 'number' ? e : (e.target as Window).innerWidth;

        return width;
      }),
    );
  }
}
