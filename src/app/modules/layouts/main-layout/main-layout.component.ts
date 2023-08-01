import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

let navbar:string;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  isSidebarActive: boolean = false;
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }
  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    // const header = document.getElementsByClassName('navbar');
    // this.renderer.setStyle(navbar, 'width', '80%')
  }

  // @ViewChild('confirmationModal') private modalComponent!: ConfirmationModalComponent;
  // modalStyle: string = 'modal-style-primary';
  // modalTitle: string = 'Info Confirmation';
  // modalBody: string = 'Are you sure you want to logout';
  // modalButtonColor: string = 'btn-warning';
  // async openModal() {
  //   return await this.modalComponent.open();
  // }

  isActive=false;
  goToDashboard() {
    this.router.navigate(['/dashboard']);
    this.isActive=!this.isActive;
  }
  goToUserVerification() {
    this.router.navigate(['/user-verification']);
  }
  goToCallerDetails() {
    this.router.navigate(['/caller-details']);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
