import {Component, OnDestroy, Renderer} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my_component.ng.html',
})
export class MyComponent implements OnDestroy {
  stopListening: Function;

  constructor(private renderer: Renderer) {
    this.stopListening =
        renderer.listen('window', 'message', this.handleMessage.bind(this));
  }

  handleMessage(event: Event) {
    const message = event as MessageEvent;

    // Only trust messages from the below origin.
    if (message.origin !== 'http://example.com:8080') return;

    console.log(message.data);
  }

  ngOnDestroy() {
    this.stopListening();
  }
}