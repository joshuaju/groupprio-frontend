import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GroupPrio';
  cookieMessage = 'WIR BENUTZEN COOKIES';
  cookieDismiss = 'OK, MAN';
  cookieLinkText = 'INFO, MAN';
  cookieValue = 'wooop';
  public clientId: string;

  constructor(private cookieService: CookieService) {
    this.clientId = Guid.create().toString();
  }

  public ngOnInit(): void {
    if (!this.cookieService.check('clientId')) {
      this.cookieService.set('clientId', this.clientId);
    }
    this.cookieValue = this.cookieService.get('clientId');
    this.addCookieFooter();
  }

  private addCookieFooter() {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#164969',
        },
        button: {
          background: '#ffe000',
          text: '#164969',
        },
      },
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: '/dataprivacy',
      },
    });
  }
}
