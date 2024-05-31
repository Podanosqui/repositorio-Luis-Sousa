import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }

  dataCard: Card[] = [
    // { image: './assets/doctor.png', textHead: 'App to doctors', textFooter:'Aplicação web criada para fazer o calculo para doses de medicamentos podendo ser utilizada por medicos e enfermeiros. O Front-end foi criado em Angular com um design responsivo. O back-end foi criado em C# .NET CORE 6.0 e banco de dados SQLServer, publicado na AZURE e AWS', linkButton:'https://maycon-app-doctors.azurewebsites.net/' },
    // { image: './assets/areademembros.png', textHead: 'Area de membros', textFooter:'Aplicação web de um site de cursos online, Front-end em React com design responsivo, com Back-end em C# .Net Core 7.0 e banco de dados MySql, publicado na AZURE e AWS', linkButton:'https://maycon-area-membros.azurewebsites.net/' },
    // { image: './assets/family-media-plan-stepers-cadastro2.png', textHead: 'Family media plan', textFooter:'Aplicação web front-end em React para cadastro e manutenção de planos familiares. O usuário pode navegar entre telas e stepers criados para que o cliente possa escolher as opções que melhor lhe atendem. Com um estrutura e desing responsivos, que torna o uso intuitivo e prático para melhor atender as necessidades do cliente e sua experiência.', linkButton:'https://maycon-media-plan.azurewebsites.net/' },
    // { image: './assets/quadros.jfif', textHead: 'Ecommerce Quadros', textFooter:'Aplicação web front-end em Angular 12 para venda de quadros um ecommerce estruturado para integrar com plataformas de pagamento.', linkButton:'https://maycon-ecommerce-quadros.azurewebsites.net/' },
    { image: './assets/i9visitante.png', textHead: 'I9 - Gestão de Varejo', textFooter:'Aplicação de gestão de estoque online, desenvolvida em React e C# como API.', linkButton:'https://gestaodevarejoportfolio.onrender.com/login' },
    { image: './assets/rifaonline.png', textHead: 'Rifa Online', textFooter:'Aplicação de gestão e criação de Rifas', linkButton:'https://rifaportfolio.onrender.com/' },
    { image: './assets/prudentinvestor.png', textHead: 'Prudent Investor', textFooter:'Aplicação com novidades e atualizações sobre o mundo dos investimentos.', linkButton:'https://prudent-portal-oficial.azurewebsites.net/' },
   
  ];
}


