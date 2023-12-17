import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsInfoComponent } from '../cards-info';
import { CardsImageComponent } from '../cards-image';
import { Card, CardsInfoPlacement } from '../cards.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    CardsInfoComponent,
    CardsImageComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() item!: Card;
  @Input() showPrice!: boolean;
  @Input() imageFullHeight!: boolean;
  @Input() border!: string;
  @Input() showviewedCount!: boolean;
  @Input() titleStaticHeight!: string;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;

  getCardsInfoPlacementStyle(): any {
    const style = {
      'display': 'flex',
      'flex-direction': 'column',
    }

    switch (this.cardsInfoPlacement) {
      case CardsInfoPlacement.top:
        style['flex-direction'] = 'column-reverse';
        break;
      case CardsInfoPlacement.right:
        style['flex-direction'] = 'row';
        break;
      case CardsInfoPlacement.left:
        style['flex-direction'] = 'row-reverse';
        break;
      default:
        style['flex-direction'] = 'column';
    }

    return style;
  }
}
