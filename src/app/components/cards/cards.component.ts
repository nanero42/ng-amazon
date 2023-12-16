import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardsInfoComponent } from './cards-info';
import { CardsImageComponent } from './cards-image';

export interface Card {
  id: string;
  title: string;
  image: string;
  price_int: string;
  price_cent: string;
  price_sale: string;
  currency_code: string;
  currency_sign: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardsInfoComponent,
    CardsImageComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() items: Card[] = [];
  @Input() title = '';
  @Input() showPrice = true;
  @Input() cardsInfoOnBottom = false;
  @Input() imageFullHeight = false;
}
