import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class headerComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDashboard() {
    console.log("clicked");
   this.router.navigate(['/dashboard']);
  }
}
