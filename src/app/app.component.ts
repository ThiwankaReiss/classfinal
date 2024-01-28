import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-site';
  constructor(private router: Router) {}

  shouldShowVedioComponent(): boolean {
    // Get the current route
    const currentRoute = this.router.url;

    // Check if the current route is not "contactMe"
    return currentRoute == '/';
  }

 
}
