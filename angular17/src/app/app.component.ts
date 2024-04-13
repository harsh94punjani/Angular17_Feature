import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandaloneComponentComponent } from "./standalone-component/standalone-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StandaloneComponentComponent]
})
export class AppComponent {
  title = 'angular17';
}
