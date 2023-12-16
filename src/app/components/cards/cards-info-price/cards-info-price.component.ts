import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../cards.component';

@Component({
  selector: 'app-cards-info-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-info-price.component.html',
  styleUrls: ['./cards-info-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsInfoPriceComponent {
  @Input() item!: Card;
}
