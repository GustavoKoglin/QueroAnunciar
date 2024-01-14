import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncie',
  standalone: true,
  imports: [],
  templateUrl: './anuncie.component.html',
  styleUrl: './anuncie.component.scss'
})
export class AnuncieComponent {
  constructor(private router: Router) {}
  redirectToComponent(){
    this.router.navigate(['./formulario-anuncio']);
  }
}
