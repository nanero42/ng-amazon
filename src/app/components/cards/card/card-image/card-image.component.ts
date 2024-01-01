import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardsInfoPlacement } from '../../cards.component';
import { BehaviorSubject, combineLatest, tap } from 'rxjs';
import { Style, SubscriptionService } from 'src/app/providers';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent implements OnInit, OnDestroy {
  private imageFullHeight$ = new BehaviorSubject<boolean>(false);
  private imageContainerBg$ = new BehaviorSubject<string>('');
  private imageContainerHeight$ = new BehaviorSubject<string>('');
  private imageObjectFit$ = new BehaviorSubject<string>('');
  private imageContainerMarginBottom$ = new BehaviorSubject<string>('');
  private imageContainerBorderRadius$ = new BehaviorSubject<string>('');

  private subscription = inject(SubscriptionService);

  readonly CardsInfoPlacement = CardsInfoPlacement;

  @Input() item!: Card;
  @Input() cardsInfoPlacement!: keyof typeof CardsInfoPlacement;
  @Input() set imageContainerMarginBottom(v: string) { this.imageContainerMarginBottom$.next(v) }
  @Input() set imageFullHeight(v: boolean) { this.imageFullHeight$.next(v) }
  @Input() set imageContainerBg(v: string) { this.imageContainerBg$.next(v || '#F7F8F8') }
  @Input() set imageContainerHeight(v: string) { this.imageContainerHeight$.next(v || '150px') }
  @Input() set imageObjectFit(v: string) { this.imageObjectFit$.next(v || 'contain') }
  @Input() set imageContainerBorderRadius(v: string) { this.imageContainerBorderRadius$.next(v || '6px') }

  containerS$ = new BehaviorSubject<Style>({});
  imageS$ = new BehaviorSubject<Style>({});

  ngOnInit(): void {
    this.watchContainerStyle();
    this.watchImageStyle();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribeAll();
  }

  private watchContainerStyle(): void {
    const containerStyleSub = combineLatest([
      this.imageFullHeight$,
      this.imageContainerBg$,
      this.imageContainerHeight$,
      this.imageContainerMarginBottom$,
      this.imageContainerBorderRadius$,
    ]).pipe(
      tap(([
        imageFullHeight,
        imageContainerBg,
        imageContainerHeight,
        imageContainerMarginBottom,
        imageContainerBorderRadius,
      ]) => {
        const imageFullHeightStyle = {
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        }

        this.containerS$.next({
          ...(imageFullHeight && { ...imageFullHeightStyle }),
          'background-color': imageContainerBg,
          'height': imageContainerHeight,
          'margin-bottom': imageContainerMarginBottom,
          'border-radius': imageContainerBorderRadius,
        });
      })
    ).subscribe();

    this.subscription.addSub('containerStyleSub', containerStyleSub);
  }

  private watchImageStyle(): void {
    const imageStyleSub = combineLatest([
      this.imageObjectFit$,
    ]).pipe(
      tap(([imageObjectFit]) => {
        this.imageS$.next({
          'object-fit': imageObjectFit,
        });
      }),
    ).subscribe();

    this.subscription.addSub('imageStyleSub', imageStyleSub);
  }

  getCardsInfoPlacement(): any {
    const cardsImage = {
      'flex': this.isLeftOrRight() ? '30%' : '',
      'padding-right': this.isLeftOrRight() ? '10px' : '',
    }

    return {
      cardsImage,
    };
  }

  private isLeftOrRight(): boolean {
    return this.cardsInfoPlacement === CardsInfoPlacement.left || this.cardsInfoPlacement === CardsInfoPlacement.right;
  }
}
