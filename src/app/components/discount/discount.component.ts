import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountComponent {
  @Input() discount!: number | undefined;
}
