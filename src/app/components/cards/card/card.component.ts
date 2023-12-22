import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info';
import { CardImageComponent } from './card-image';
import { Card, CardsInfoPlacement } from '../cards.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    CardInfoComponent,
    CardImageComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  private _borderRadius = '0';

  @Input() item!: Card;
  @Input() showPrice!: boolean;
  @Input() imageFullHeight!: boolean;
  @Input() imageContainerBg!: string;
  @Input() border!: string;
  @Input() showviewedCount!: boolean;
  @Input() titleStaticHeight!: string;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;
  @Input() imageContainerMarginBottom!: string;
  @Input() discount!: number | undefined;
  @Input() imageContainerHeight!: string;
  @Input() imageObjectFit!: string;
  @Input() showMarginAfterDiscount!: boolean;
  @Input() imageContainerBorderRadius!: string;
  @Input() showInfo!: boolean;
  @Input()
  set borderRadius(v: string | undefined) { v ? this._borderRadius = v : '' }
  get borderRadius() { return this._borderRadius }

  getCardsInfoPlacementStyle(): any {
    const card = {
      'display': 'flex',
      'flex-direction': 'column',
    }

    switch (this.cardsInfoPlacement) {
      case CardsInfoPlacement.top:
        card['flex-direction'] = 'column-reverse';
        break;
      case CardsInfoPlacement.right:
        card['flex-direction'] = 'row';
        break;
      case CardsInfoPlacement.left:
        card['flex-direction'] = 'row-reverse';
        break;
      default:
        card['flex-direction'] = 'column';
    }

    return {
      card,
    }
  }
}
