import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardsInfoPlacement } from '../cards.component';
import { PriceComponent } from '../../price';
import { DiscountComponent } from '../../discount/discount.component';

@Component({
  selector: 'app-cards-info',
  standalone: true,
  imports: [
    CommonModule,
    PriceComponent,
    DiscountComponent,
  ],
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsInfoComponent {
  @Input() item!: Card;
  @Input() showPrice!: boolean;
  @Input() showviewedCount!: boolean;
  @Input() titleStaticHeight!: string;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;
  @Input() discount!: number | undefined;

  readonly CardsInfoPlacement = CardsInfoPlacement;

  getCardsInfoPlacementStyle(): any {
    const cardsInfo = {
      flex: this.isLeftOrRight() ? '70%' : '',
    }

    return {
      cardsInfo,
    }
  }

  private isLeftOrRight(): boolean {
    return this.cardsInfoPlacement === CardsInfoPlacement.left || this.cardsInfoPlacement === CardsInfoPlacement.right;
  }
}
