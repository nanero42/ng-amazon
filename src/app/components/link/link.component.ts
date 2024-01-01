import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  private _textColor = '#017185';

  @Input() text!: string;
  @Input() imageUrl!: string;
  @Input()
  set textColor(v: string | undefined) { v ? this._textColor = v : '' }
  get textColor() { return this._textColor }
}
