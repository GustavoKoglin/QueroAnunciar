import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anuncie',
  standalone: true,
  imports: [],
  templateUrl: './anuncie.component.html',
  styleUrls: ['./anuncie.component.scss'],
})
export class AnuncieComponent {
  constructor(private router: Router) {}
  goToAnuncieForm(){
    console.log(this.goToAnuncieForm(), this.router.navigate(['/form-anuncio']));
    this.router.navigate(['/form-anuncio']);
  }
}