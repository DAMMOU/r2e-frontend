import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulaire valide:', this.loginForm.value);
      // Logique de connexion ici
    } else {
      console.log('Formulaire invalide');
    }
  }

  loginWithGoogle() {
    console.log('Connexion avec Google');
    // Logique pour Google OAuth
  }

  loginWithGithub() {
    console.log('Connexion avec GitHub');
    // Logique pour GitHub OAuth
  }
}
