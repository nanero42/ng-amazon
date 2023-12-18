import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum LinkType {
  text = 'text',
  image = 'image',
}

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  @Input() text!: string;
  @Input() linkType: keyof typeof LinkType = LinkType.text;
}
