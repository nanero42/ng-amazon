import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTitleComponent {
  @Input() title!: string;
  @Input() height!: string;
}
