import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { BehaviorSubject, Subscription, fromEvent, tap } from 'rxjs';
import { SubscriptionService } from 'src/app/providers';

interface Slide {
  id: string;
  src: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly document: Document = inject(DOCUMENT);
  private readonly r2 = inject(Renderer2);
  private readonly subscription = inject(SubscriptionService);

  private isMousedown$ = new BehaviorSubject(false);

  private startX = 0;
  private movingX = 0;
  private movedX = 0;

  private index = 0;

  private camera!: HTMLDivElement;

  @ViewChild('camera') cameraRef!: ElementRef<HTMLDivElement> | null;

  slides: Slide[] = [
    {
      id: 'rg3g3',
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'bge3hj46j',
      src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'wg3g43',
      src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'wg3g4324g2',
      src: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'n5yj67k6',
      src: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  ngOnInit(): void {
    this.mousedown();
    this.mouseup();
    this.mouseleave();
  }

  ngAfterViewInit(): void {
    this.setCamera();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribeAll();
  }

  private mousedown() {
    const mousedown = fromEvent<MouseEvent>(this.document, 'mousedown').pipe(
      tap((e) => {
        this.startX = e.x;

        this.mousemove();
      }),
    ).subscribe();

    this.subscription.addSub('mousedown', mousedown);
  }

  private mousemove() {
    const mousemove = fromEvent<MouseEvent>(this.document, 'mousemove').pipe(
      tap((e) => {
        this.movingX = e.x;
        this.movedX = Math.abs(this.startX - this.movingX);

        if (this.shouldSlideForward()) {
          this.moveCamera(this.index * this.camera.clientWidth + this.movedX);
        } else {
          this.moveCamera(this.index * this.camera.clientWidth - this.movedX);
        }
      })
    ).subscribe();

    this.subscription.addSub('mousemove', mousemove);
  }

  private mouseup() {
    const mouseup = fromEvent<MouseEvent>(this.document, 'mouseup').pipe(
      tap((e) => {
        this.subscription.removeSub('mousemove');

        if (this.sholudSlide()) {
          this.shouldSlideForward() ? this.slide(1) : this.slide(-1);
        } else {
          this.slide(0);
        }
      }),
    ).subscribe();

    this.subscription.addSub('mouseup', mouseup);
  }

  private slide(slideIndex: number) {
    const idx = this.index += slideIndex;
    this.moveCamera(idx * this.camera.clientWidth);
  }

  private moveCamera(pos: number) {
    this.r2.setStyle(this.camera, 'transform', `translateX(${pos}px)`);
  }

  private shouldSlideForward(): boolean {
    return this.movingX > this.startX;
  }

  private sholudSlide(): boolean {
    return this.movedX > 100;
  }

  private setCamera() {
    const el = this.cameraRef?.nativeElement;

    if (!el) return;

    this.camera = el;
  }






  private mouseleave() {
    const mouseleave = fromEvent<MouseEvent>(this.document, 'mouseleave').pipe(
      tap((e) => {
        this.isMousedown$.next(false);
      }),
    ).subscribe();

    this.subscription.addSub('mouseleave', mouseleave);
  }

  // private contextmenu() {
  //   return fromEvent(this.document, 'contextmenu').pipe(
  //     tap((e) => e.preventDefault()),
  //   );
  // }

  // private dragstart() {
  //   return fromEvent(this.document, 'dragstart').pipe(
  //     tap((e) => console.log(e)),
  //   );
  // }

  // private dragend() {
  //   return fromEvent(this.document, 'dragend').pipe(
  //     tap((e) => console.log(e)),
  //   );
  // }
}
