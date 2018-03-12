import { 
        Component, 
        AfterViewInit, 
        ChangeDetectionStrategy, 
        ViewChild, 
        ElementRef, 
        Inject, 
        Optional, 
        Renderer 
    } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Component({
    selector: 'amap-picker-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmapPickerModalComponent implements AfterViewInit {

    @ViewChild('iframe') iframe: ElementRef;

    receiveMessage: EventListener;

    private isInited: boolean;

    constructor( private renderer: Renderer ) { }

    ngOnInit() {
        // this.renderer.setElementProperty(this.iframe.nativeElement, 'src', `https://m.amap.com/picker/${query}`)

        this.receiveMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://m.amap.com') {
                return;
            }
            //   this.dialog.close(amapstringify(<AmapLocation>event.data));
        };
    }

    ngAfterViewInit() {
        this.isInited = true;
    }

    ngOnDestroy() {
        window.removeEventListener('message', this.receiveMessage);
    }

    onIframeLoad() {
        if (this.isInited) {
            setTimeout(() => {
                this.iframe.nativeElement.contentWindow.postMessage('hello', 'https://m.amap.com/picker/');
                window.addEventListener('message', this.receiveMessage, false);
            }, 500);
        }
    }

}