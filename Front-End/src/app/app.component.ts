import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnuncieComponent } from './anuncie/anuncie.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { SuporteComponent } from './suporte/suporte.component';
import { CadastrarOportunidadeTrabalhoComponent } from './cadastrar-oportunidade-trabalho/cadastrar-oportunidade-trabalho.component';
import { EfetuarPagamentoComponent } from './efetuar-pagamento/efetuar-pagamento.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { OportunidadesDeTrabalhoComponent } from './oportunidades-de-trabalho/oportunidades-de-trabalho.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PesquisaGlobalComponent } from './pesquisa-global/pesquisa-global.component';
import { VendaImovelComponent } from './venda-imovel/venda-imovel.component';
import { VendaVeiculoComponent } from './venda-veiculo/venda-veiculo.component';
import { VendaProdutoComponent } from './venda-produto/venda-produto.component';
import { VendaServicoComponent } from './venda-servico/venda-servico.component';
import { SejaPremiumComponent } from './seja-premium/seja-premium.component';
import { FormularioAnuncioComponent } from './formulario-anuncio/formulario-anuncio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    FormsModule,
    ReactiveFormsModule, 
    NavBarComponent,
    HomePageComponent, 
    AnuncieComponent, 
    CadastroComponent, 
    ContatoComponent, 
    LoginComponent, 
    SobreComponent, 
    SaibaMaisComponent,
    SuporteComponent,
    CadastrarOportunidadeTrabalhoComponent,
    EfetuarPagamentoComponent,
    MenuToggleComponent,
    OportunidadesDeTrabalhoComponent,
    PerfilComponent,
    PesquisaGlobalComponent,
    VendaImovelComponent,
    VendaVeiculoComponent,
    VendaProdutoComponent,
    VendaServicoComponent,
    SejaPremiumComponent,
    FormularioAnuncioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Front-End';
}
