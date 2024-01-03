import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SubscriptionService, ViewportService } from 'src/app/providers';
import { KeepExploringComponent } from '../keep-exploring';
import { LinkComponent } from '../link';
import { CardComponent } from './card';

export interface Card {
  id: string;
  name?: string;
  image: string;
  price_int?: number;
  price_cent?: number;
  price_crossed?: number;
  currency_code?: string;
  currency_sign?: string;
  viewed_count?: number;
  discount?: number;
}

export interface Breakpoint {
  condition: string;
  columns: string;
}

export enum CardsInfoPlacement {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    LinkComponent,
    KeepExploringComponent,
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit, OnDestroy {
  private readonly subs = inject(SubscriptionService);
  private readonly viewportService = inject(ViewportService);

  readonly columns$ = new BehaviorSubject('');

  @Input() items: Card[] = [];
  @Input() title = '';
  @Input() linkText = '';
  @Input() showPrice = true;
  @Input() cardsInfoPlacement: keyof typeof CardsInfoPlacement = CardsInfoPlacement.top;
  @Input() imageFullHeight = false;
  @Input() itemsInRow = 13;
  @Input() itemsWidth = '135px';
  @Input() cardBorder: string = 'none';
  @Input() showviewedCount = false;
  @Input() titleStaticHeight = '';
  @Input() imageContainerMarginBottom = '10px';
  @Input() imageContainerBg!: string;
  @Input() imageContainerHeight!: string;
  @Input() borderRadius!: string;
  @Input() imageObjectFit!: string;
  @Input() showMarginAfterDiscount!: boolean;
  @Input() linkTextColor!: string;
  @Input() cardBorderRadius!: string;
  @Input() imageContainerBorderRadius!: string;
  @Input() showInfo = true;
  @Input() showKeepExploring = false;
  @Input() breakpoints: Breakpoint[] = [];

  readonly CardsInfoPlacement = CardsInfoPlacement;

  ngOnInit(): void {
    const viewportWidth = this.viewportService.getWidth$().pipe(
      tap((width) => {
        this.breakpoints.forEach(({ condition, columns }) => {
          const minWidthAndValue = condition.match(/min-width\s[0-9]{1,}/gi)?.[0];
          const minWidth = minWidthAndValue?.match(/min-width/gi)?.[0];
          const minWidthValue = minWidthAndValue?.match(/[0-9]{1,}/gi)?.[0];

          const and = condition.match(/and/gi)?.[0];

          const maxWidthAndValue = condition.match(/max-width\s[0-9]{1,}/gi)?.[0];
          const maxWidth = maxWidthAndValue?.match(/max-width/gi)?.[0];
          const maxWidthValue = maxWidthAndValue?.match(/[0-9]{1,}/gi)?.[0];

          const isMinConditionValid = minWidthAndValue && minWidth && minWidthValue;
          const isMaxConditionValid = maxWidthAndValue && maxWidth && maxWidthValue;

          if (isMinConditionValid && and && isMaxConditionValid) {
            width >= +minWidthValue && width <= +maxWidthValue && this.columns$.next(columns);
          } else if (isMinConditionValid) {
            width >= +minWidthValue && this.columns$.next(columns);
          } else if (isMaxConditionValid) {
            width <= +maxWidthValue && this.columns$.next(columns);
          } else {
            this.columns$.next('');
          }
        })
      })
    ).subscribe();

    this.subs.addSub('viewportWidth', viewportWidth);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribeAll();
  }
}
