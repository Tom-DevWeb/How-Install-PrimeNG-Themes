import {Component} from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {Button} from "primeng/button";


@Component({
  selector: 'app-select-themes',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './select-themes.component.html',
  styleUrl: './select-themes.component.scss'
})
export class SelectThemesComponent {
  constructor(private themeService: ThemeService) {
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme)
  }

}
