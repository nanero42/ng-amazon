import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../cards/cards.component';
import { PriceComponent } from '../../price';

@Component({
  selector: 'app-cards-standard',
  standalone: true,
  imports: [
    CommonModule,
    PriceComponent,
  ],
  templateUrl: './cards-standard.component.html',
  styleUrls: ['./cards-standard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsStandardComponent {
  @Input() title!: string;
  @Input() items: Card[] = [];
}
