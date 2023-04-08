import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor( public _auth: AuthService) { }

  ngOnInit(): void {
  }

logout(){


localStorage.removeItem('token');
this.router.navigate(['/login']);

}



}
