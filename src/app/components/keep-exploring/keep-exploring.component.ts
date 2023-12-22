import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keep-exploring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keep-exploring.component.html',
  styleUrls: ['./keep-exploring.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeepExploringComponent {

}
