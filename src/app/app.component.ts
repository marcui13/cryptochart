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
}
