declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router)
    ngOnInit(): void {
      google.accounts.id.initialize({
        client_id:'1055637787483-ghpfocjpcbu84bg30c51as5c67e5ve3n.apps.googleusercontent.com',
        callback:(resp:any)=>this.handleLogin(resp)

      })
      google.accounts.id.renderButton(document.getElementById('google-btn'),{
        theme:'filled_blue',
        size:'large',
        shape:'rectangle',
        width:350
      })
    }

    // decode
    // jwl token made 3 things (Header,payload,key) we are taking 2 nd one
    private decodeToken(token:string){
      return JSON.parse(atob(token.split(".")[1]))
    }

    handleLogin(response:any){
         if(response){
          // decode token
          const payload = this.decodeToken(response.credential)
          // store in session
          sessionStorage.setItem("loggedInUser",JSON.stringify(payload))
          // navigate to home/browse
            this.router.navigate(['/browse'])
         }
    }
}
