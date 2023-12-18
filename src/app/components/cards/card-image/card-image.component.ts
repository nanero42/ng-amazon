import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardsInfoPlacement } from '../cards.component';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent {
  private _imageContainerHeight = '150px';
  private _imageContainerBg = '#F7F8F8';

  @Input() item!: Card;
  @Input() imageFullHeight = false;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;
  @Input() imageContainerMarginBottom!: string;
  @Input()
  set imageContainerBg(bg: string | undefined) { bg ? this._imageContainerBg = bg : '' }
  get imageContainerBg() { return this._imageContainerBg }
  @Input()
  set imageContainerHeight(h: string | undefined) { h ? this._imageContainerHeight = h : '' }
  get imageContainerHeight() { return this._imageContainerHeight }

  readonly CardsInfoPlacement = CardsInfoPlacement;

  imageFullHeightStyle(): any {
    const imageContainer = {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'background-color': this.imageContainerBg,
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
