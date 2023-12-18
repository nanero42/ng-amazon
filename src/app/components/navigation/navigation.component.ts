import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../link';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

}
