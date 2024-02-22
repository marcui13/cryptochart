import { Component, OnInit } from '@angular/core';
import { ThemeSelectorService } from './@services/theme-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Crypto Chart';
  public themes = [
    {
      id: 'lara-light-blue',
      label: 'Lara Light Blue'
    },
    {
      id: 'lara-dark-blue',
      label: 'Lara Dark Blue'
    },
  ];
  public selectedTheme: { id: string; label: string } = this.themes[0];
  public darkMode: boolean = false;
  public toggleLabel: string = 'Light';

  /*************************************/
  /************constructor**************/
  /*************************************/
  constructor(private themeSelectorService: ThemeSelectorService) { }

  /*************************************/
  /************ngOnInit*****************/
  /*************************************/
  ngOnInit(): void { }

  changeTheme(themeId: string) {
    this.themeSelectorService.switchTheme(themeId);
  }

  onToggleTheme() {
    this.themeSelectorService.toggleTheme();
    this.darkMode = !this.darkMode;
    this.toggleLabel = this.darkMode ? 'Dark' : 'Light';
  }
}
