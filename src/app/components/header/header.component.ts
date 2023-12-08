import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon';
import { AutocompleteComponent } from '../autocomplete';
import { NavigationComponent } from '../navigation';
import { DeliverToComponent } from '../deliver-to/deliver-to.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    AutocompleteComponent,
    NavigationComponent,
    DeliverToComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
