import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon';

@Component({
  selector: 'app-deliver-to',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
  ],
  templateUrl: './deliver-to.component.html',
  styleUrls: ['./deliver-to.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliverToComponent {
  @Input() destination = 'USA';
}
