import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  subscription: {[key: string]: Subscription} = {};

  constructor() { }

  addSub(name: string, s: Subscription) {
    this.subscription[name] = s;
  }

  removeSub(name: string) {
    this.subscription[name]?.unsubscribe();
    delete this.subscription[name];
  }

  unsubscribeAll(): void {
    for (const s in this.subscription) {
      this.subscription[s]?.unsubscribe();
      delete this.subscription[s];
    }
  }
}
