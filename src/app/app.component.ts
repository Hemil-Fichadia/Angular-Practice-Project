import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HomeComponent, HeaderComponent],
	template: `
	<app-header/>
	<main>
		<app-home/>
	</main>
  `,
	styles: [`
    main {
		padding: 20px;
	}
    `],
})
export class AppComponent {
	title = `Hemil's first angular app with app-root component`;
}
