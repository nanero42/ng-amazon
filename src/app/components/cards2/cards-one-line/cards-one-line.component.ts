import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../cards/cards.component';

@Component({
  selector: 'app-cards-one-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-one-line.component.html',
  styleUrls: ['./cards-one-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsOneLineComponent {
  @Input() items: Card[] = [];
}
