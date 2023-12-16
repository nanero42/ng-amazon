import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardListItem {
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent {
  @Input() items: CardListItem[] = [];
}
