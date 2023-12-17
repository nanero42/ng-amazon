import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../cards.component';
import { PriceComponent } from '../../price';

@Component({
  selector: 'app-cards-info',
  standalone: true,
  imports: [
    CommonModule,
    PriceComponent
  ],
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsInfoComponent {
  @Input() item!: Card;
  @Input() showPrice = true;
}
