import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../cards.component';

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

  imageFullHeightStyle(): any {
    const imageContainer = {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'background-color': '#EEE',
    }

    const image = {
      'object-fit': 'contain',
      'width': '70%',
    }

    return {
      imageContainer,
      image,
    }
  }
}
