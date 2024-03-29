import { Routes } from '@angular/router';
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
import { OportunidadesDeTrabalhoComponent } from './oportunidades-de-trabalho/oportunidades-de-trabalho.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PesquisaGlobalComponent } from './pesquisa-global/pesquisa-global.component';
import { VendaImovelComponent } from './venda-imovel/venda-imovel.component';
import { VendaVeiculoComponent } from './venda-veiculo/venda-veiculo.component';
import { VendaProdutoComponent } from './venda-produto/venda-produto.component';
import { VendaServicoComponent } from './venda-servico/venda-servico.component';
import { SejaPremiumComponent } from './seja-premium/seja-premium.component';
import { FormularioAnuncioComponent } from './formulario-anuncio/formulario-anuncio.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'anuncie', component: AnuncieComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'saiba-mais', component: SaibaMaisComponent },
    { path: 'suporte', component: SuporteComponent },
    { path: 'cadastrar-oportunidade-trabalho', component: CadastrarOportunidadeTrabalhoComponent },
    { path: 'efetuar-pagamento', component: EfetuarPagamentoComponent },
    { path: 'oportunidades-de-trabalho', component: OportunidadesDeTrabalhoComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'pesquisa-global', component: PesquisaGlobalComponent },
    { path: 'venda-imovel', component: VendaImovelComponent },
    { path: 'venda-veiculo', component: VendaVeiculoComponent },
    { path: 'venda-produto', component: VendaProdutoComponent },
    { path: 'venda-servico', component: VendaServicoComponent },
    { path: 'seja-premium', component: SejaPremiumComponent },
    { path: 'form-anuncio', component: FormularioAnuncioComponent },
];
