import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {
  showPassword = false;
  showConfirmPassword = false;

  // Toggle pour afficher/masquer le mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Toggle pour afficher/masquer la confirmation du mot de passe
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Méthode de soumission basique
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulaire soumis:', form.value);
      // Tu pourras ajouter la logique d'inscription plus tard ici
      alert('Formulaire soumis avec succès !');
    } else {
      console.log('Formulaire invalide');
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  // Méthodes pour l'inscription sociale (basiques)
  registerWithGoogle() {
    console.log('Inscription avec Google');
    // Logique à ajouter plus tard
  }

  registerWithGithub() {
    console.log('Inscription avec GitHub');
    // Logique à ajouter plus tard
  }
}