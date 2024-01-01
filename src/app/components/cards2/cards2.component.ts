import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../cards/cards.component';
import { CardsOneLineComponent } from './components';
import { CardsStandartComponent } from './components/cards-standart/cards-standart.component';

export enum Cards2Categories {
  oneLine = 'oneLine',
  standart = 'standart',
}

@Component({
  selector: 'app-cards2',
  standalone: true,
  imports: [
    CommonModule,
    CardsOneLineComponent,
    CardsStandartComponent,
  ],
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cards2Component {
  readonly Cards2Categories = Cards2Categories;

  @Input({ required: true }) category!: keyof typeof Cards2Categories;
  @Input() items: Card[] = [];
  @Input() title!: string;
}
