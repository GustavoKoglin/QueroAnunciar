import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-anuncio',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './formulario-anuncio.component.html',
  styleUrl: './formulario-anuncio.component.scss'
})


export class FormularioAnuncioComponent {
  tipoAnuncio: string[] = ['imovel', 'veiculo', 'produto', 'servico'];
  selectedTipoAnuncio: string = '';


  // Adicione mais propriedades para os formulários específicos, se necessário

  // Método para lidar com a mudança na seleção do tipo de anúncio
  onTipoAnuncioChange() {
    // Lógica para lidar com a mudança na seleção, se necessário
  }
}
