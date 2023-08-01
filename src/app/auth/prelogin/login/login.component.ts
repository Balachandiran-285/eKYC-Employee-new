import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    // this.openModal();
  }


  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}

