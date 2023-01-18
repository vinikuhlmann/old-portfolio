import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";

import ContactInfo from './components/ContactInfo';
import TextCard from './components/TextCard';
import ProjectList from './components/ProjectList';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

const aboutMeText = (
  <p>
    Olá! Meu nome é Vinícius, tenho 22 anos e sou estudante de Ciência da Computação na Universidade de São Paulo, campus São Carlos,
    com ênfases em Ciência de Dados, Engenharia de Software e Algoritmos Avançados. <br /> <br />
    Atualmente, estou trabalhando como estagiário na <a href='https: //cpxdigital.com.br/'>CPX Digital</a>, onde desenvolvo programas de web scraping com Selenium,
    e uso Pandas para organizar dados e gerar tabelas. <br /> <br />
    Estou muito interessado nas áreas de Ciência de Dados, Engenharia de Software e Desenvolvimento Full Stack, então se você tiver alguma oportunidade de trabalho ou estágio, por favor, entre em contato comigo!
    Aprendo rápido e sou muito dedicado, então acredito que serei um ótimo colaborador para sua empresa. <br /> <br />
  </p>
)

const element = (
  <div>
    <ContactInfo />
    <TextCard title="Sobre mim" text={aboutMeText} />
    <ProjectList />,
  </div>
)

root.render(element);