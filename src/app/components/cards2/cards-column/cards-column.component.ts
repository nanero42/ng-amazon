import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../cards/cards.component';
import { ProductTitleComponent } from '../../product-title';
import { PriceComponent } from '../../price';

@Component({
  selector: 'app-cards-column',
  standalone: true,
  imports: [
    CommonModule,
    ProductTitleComponent,
    PriceComponent,
  ],
  templateUrl: './cards-column.component.html',
  styleUrls: ['./cards-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsColumnComponent {
  @Input() items: Card[] = [];
  @Input() title!: string;
}
