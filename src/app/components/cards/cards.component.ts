import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from './card';

export interface Card {
  id: string;
  title?: string;
  image: string;
  price_int?: number;
  price_cent?: number;
  price_crossed?: number;
  currency_code?: string;
  currency_sign?: string;
  viewed_count?: number;
  discount?: number;
}

export enum CardsInfoPlacement {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {
  @Input() items: Card[] = [];
  @Input() title = '';
  @Input() linkText = '';
  @Input() showPrice = true;
  @Input() cardsInfoPlacement: keyof typeof CardsInfoPlacement = CardsInfoPlacement.top;
  @Input() imageFullHeight = false;
  @Input() itemsInRow = 13;
  @Input() itemsWidth = '135px';
  @Input() cardBorder: string = 'none';
  @Input() showviewedCount = false;
  @Input() titleStaticHeight = '';
  @Input() imageContainerMarginBottom = '10px';
  @Input() imageContainerBg!: string;
  @Input() imageContainerHeight!: string;
  @Input() borderRadius!: string;
  @Input() imageObjectFit!: string;
  @Input() showMarginAfterDiscount!: boolean;

  readonly CardsInfoPlacement = CardsInfoPlacement;
}
