import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { CtaComponent } from './cta/cta.component';
import { Login } from "../login/login";

@Component({
  selector: 'app-home',
  imports: [CtaComponent, FeaturesComponent, HowItWorksComponent, HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected readonly title = signal('r2e-frontend');
}
