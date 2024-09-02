import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SelectThemesComponent} from "./features/select-themes/select-themes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectThemesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Install-PrimeNG-Themes';
}
