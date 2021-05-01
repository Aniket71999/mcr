import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  value: string = 'Show';
  constructor(private router: Router) {}
  items = this.router.getCurrentNavigation().extras.state;

  toggle() {
    this.hide = !this.hide;
    if (this.hide == true) this.value = 'Hide';
    else this.value = 'Show';
  }
  ngOnInit(): void {}
}
