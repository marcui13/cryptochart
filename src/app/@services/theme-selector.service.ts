import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectorService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  switchTheme(theme: string) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = theme + '.css'; // bundle name
    }
  }

  toggleTheme() {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink.href.includes('lara-dark-blue.css')) {
      themeLink.href = 'lara-light-blue.css'; // bundle name
    } else if (themeLink.href.includes('lara-light-blue.css')) {
      themeLink.href = 'lara-dark-blue.css'; // bundle name
    }
  }
}
