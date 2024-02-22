import { Inject, Injectable, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone
  ) { }

  switchTheme(theme: string) {
    this.ngZone.run(() => {
      const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = theme + '.css'; // bundle name
      }
    });
  }
}
