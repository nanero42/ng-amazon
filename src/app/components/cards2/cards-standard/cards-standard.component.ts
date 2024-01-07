import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../cards/cards.component';
import { PriceComponent } from '../../price';
import { LinkComponent } from '../../link';
import { ViewedCountComponent } from '../../viewed-count';
import { ProductTitleComponent } from '../../product-title';

@Component({
  selector: 'app-cards-standard',
  standalone: true,
  imports: [
    CommonModule,
    PriceComponent,
    LinkComponent,
    ViewedCountComponent,
    ProductTitleComponent,
  ],
  templateUrl: './cards-standard.component.html',
  styleUrls: ['./cards-standard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsStandardComponent {
  @Input() title!: string;
  @Input() items: Card[] = [];
  @Input() showViewedCount = false;
  @Input() showPrice = false;
  @Input() linkText!: string;
}
