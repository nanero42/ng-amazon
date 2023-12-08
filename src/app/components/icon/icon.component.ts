import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from './icon.enum';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  private _color = '#000';

  readonly Icon = Icon;

  @Input() name!: Icon;
  @Input() width = '24px';
  @Input() height = '24px';
  @Input()
  set color(color: string) {
    if (color) this._color = color;
  }
  get color() {
    return this._color;
  }
  @Input() transform = '';
}
