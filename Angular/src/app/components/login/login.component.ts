import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  pass: string = '';

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {}

  singin(): void {
    let user: User = new User(this.user, this.pass);
    console.log(user);
    this.usersService.singin(user).subscribe({
      next: (res) => {
        console.log(res);
        window.alert('Se ha registrado con éxito, ya puede iniciar sesion');
      },
      error: (e: Error) => {
        window.alert(
          'Se ha porducido un error al registrarse, compruebe que ha introducido todos los datos y vuelva a intentarlo'
        );
      },
    });
  }

  login(): void {
    let user: User = new User(this.user, this.pass);
    this.usersService.login(user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('auth', res);
        this.router.navigate(['/listar-inforcoche']);
      },
      error: (e: Error) => {
        window.alert('Usuario o contraseña incorrectos');
      },
    });
  }
}
