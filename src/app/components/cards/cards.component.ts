import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsInfoComponent } from './cards-info';

export interface Card {
  id: string;
  title: string;
  image: string;
  price_int: string;
  price_cent: string;
  currency_code: string;
  currency_sign: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardsInfoComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() items: Card[] = [];
  @Input() title = '';
  @Input() showPrice = true;
  @Input() listStyle: {[key: string]: string} | null = null;
}
