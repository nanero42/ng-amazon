import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../cards.component';
import { CardsInfoPriceComponent } from '../cards-info-price';

@Component({
  selector: 'app-cards-info',
  standalone: true,
  imports: [
    CommonModule,
    CardsInfoPriceComponent
  ],
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsInfoComponent {
  @Input() item!: Card;
}
