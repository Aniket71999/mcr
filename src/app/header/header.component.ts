import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  // myFunction(x) {
  //   x.classList.toggle('change');
  // }
  navigateWithState() {
    this.router.navigate(['app-login-page'], {
      // state: { data: this.signupForm.getRawValue() },
    });
  }

  ngOnInit(): void {}
}
