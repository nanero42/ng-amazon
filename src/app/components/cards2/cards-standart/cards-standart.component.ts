import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/cards/cards.component';
import { PriceComponent } from 'src/app/components/price';

@Component({
  selector: 'app-cards-standart',
  standalone: true,
  imports: [
    CommonModule,
    PriceComponent,
  ],
  templateUrl: './cards-standart.component.html',
  styleUrls: ['./cards-standart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsStandartComponent {
  @Input() items: Card[] = [];
  @Input() title!: string;
}
