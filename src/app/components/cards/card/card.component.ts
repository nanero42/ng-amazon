import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsInfoComponent } from '../cards-info';
import { CardsImageComponent } from '../cards-image';
import { Card } from '../cards.component';

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
}
