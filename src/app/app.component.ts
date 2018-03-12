import { Component, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  message1:string;
  message:string;

  sendMessage(){
    this.message1 = this.message;
    this.iframe.nativeElement.contentWindow.postMessage(this.message, 
      'http://127.0.0.1:8888/GWTIframe.html');
    console.log("Posting message to http://127.0.0.1:8888/GWTIframe.html")
  }

  @ViewChild('gwtIframe') iframe: ElementRef;

  ngAfterViewInit() {
    let content = '<button id="button" class="button" >My button </button>';
    // this.iframe.nativeElement.contentWindow.postMessage('hello', 'http://127.0.0.1:8888/GWTIframe.html');
    // console.log("Posting message to ")
  }

  // function bindEvent(element, eventName, eventHandler) {
  //   if (element.addEventListener){
  //       element.addEventListener(eventName, eventHandler, false);
  //   } else if (element.attachEvent) {
  //       element.attachEvent('on' + eventName, eventHandler);
  //   }
  // }

// var iframeSource = 'iframe.html';

// // Create the iframe
// var iframe = document.createElement('iframe');
// iframe.setAttribute('src', iframeSource);
// iframe.setAttribute('id', 'the_iframe');
// iframe.style.width = 450 + 'px';
// iframe.style.height = 200 + 'px';
// document.body.appendChild(iframe);

// // Send a message to the child iframe
// var iframeEl = document.getElementById('the_iframe'),
// messageButton = document.getElementById('message_button'),
// results = document.getElementById('results');


// // Send a message to the child iframe
// var sendMessage = function(msg) {
//     // Make sure you are sending a string, and to stringify JSON
//     iframeEl.contentWindow.postMessage(msg, '*');
//     iframeEl.contentWindow.postMessage(msg, '*');

// };

// // Send random messge data on every button click
// bindEvent(messageButton, 'click', function (e) {
//     var random = Math.random();
//     sendMessage('' + random);
// });

// // Listen to message from child window
// bindEvent(window, 'message', function (e) {
//     results.innerHTML = e.data;
// });

}
