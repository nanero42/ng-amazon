import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardsInfoPlacement } from '../cards.component';

@Component({
  selector: 'app-cards-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-image.component.html',
  styleUrls: ['./cards-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsImageComponent {
  @Input() item!: Card;
  @Input() imageFullHeight = false;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;
  @Input() imageContainerMarginBottom!: string;

  readonly CardsInfoPlacement = CardsInfoPlacement;

  imageFullHeightStyle(): any {
    const imageContainer = {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'background-color': '#F7F8F8',
    }

    const image = {
      'object-fit': 'contain',
      'width': '100%',
    }

    return {
      imageContainer,
      image,
    }
  }

  getCardsInfoPlacement(): any {
    const cardsImage = {
      'flex': this.isLeftOrRight() ? '30%' : '',
      'padding-right': this.isLeftOrRight() ? '10px' : '',
    }

    return {
      cardsImage,
    };
  }

  private isLeftOrRight(): boolean {
    return this.cardsInfoPlacement === CardsInfoPlacement.left || this.cardsInfoPlacement === CardsInfoPlacement.right;
  }
}
