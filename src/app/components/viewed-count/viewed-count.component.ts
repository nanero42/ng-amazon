import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewed-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewed-count.component.html',
  styleUrls: ['./viewed-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewedCountComponent {
  @Input() viewedCount!: number;
}
