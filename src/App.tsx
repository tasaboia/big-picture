import React from "react";
import Header from "./components/header";
import BigPictureCards from "./components/big-picture-cards";
import Accordion from "./components/accordion";
import "./App.css";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const accordionData: AccordionItem[] = [
    {
      id: "01",
      title: "VERSÍCULOS",
      content:
        "Versículos bíblicos que o Senhor já falou comigo e que marcaram meu relacionamento com ele. Os versículos que Deus já falou sobre você, são pilares para sustentar a sua jornada.",
    },
    {
      id: "02",
      title: "DIREÇÕES SOBRENATURAIS",
      content:
        "Explorar as maneiras pelas quais Deus comunica comigo. O que deus Já falou comigo em visões, palavras proféticas, sonhos, palavras de conhecimento. As experiências sobrenaturais são como os faróis que iluminam a nossa visão.Quais são as palavras e qual a frequência que isso aconteceu?",
    },
    {
      id: "03",
      title: "ESFERAS DA SOCIEDADE",
      content:
        "Onde Deus te chamou para atuar com aquilo que o Senhor tem dito no seu individual? A nossa missão é ser luz na escuridão, nas diferentes esferas da sociedade. Lembre-se: o Reino de Deus não é a igreja, a igreja está dentro do Reino de Deus nas 7 esferas.",
    },
    {
      id: "04",
      title: "DORES",
      content:
        "Como os momentos difíceis que enfrentamos moldaram o nosso caráter e propósito",
    },
    {
      id: "05",
      title: "PAIXÕES",
      content:
        "Quais as paixões que queimam sobre você que você deseja trazer redenção? O que causa profundo entusiasmo no seu coração? O que te tira da cama pela manhã?",
    },
    {
      id: "06",
      title: "CONEXÕES",
      content:
        "Ninguém caminha sozinho, Deus coloca pessoas estratégicas na sua vida para seu desenvolvimento. Quais as conexões que desenvolvemos de forma sobrenaturais? Não podemos ignorar as conexões repentinas. Você pode estar a uma conexão do seu destino.",
    },
    {
      id: "07",
      title: "DONS: DE CRISTO E DO ESPÍRITO SANTO",
      content:
        "Você não será eficaz se você tiver o chamado ministério mas não tiver o Dom, a ferramenta para execução desse chamado. Quais os dons de Cristo e do Espírito Santo que você carrega? \nDONS DE CRISTO \nDONS DO ESPÍRITO SANTO",
    },
    {
      id: "08",
      title: "TALENTOS E HABILIDADES",
      content:
        "Reconhecer os talentos e desenvolver as suas habilidades vai te dar cada vez mais, uma capacidade de liderar e influenciar no Reino de Deus e pra expansão do reino de Deus aqui na terra. ",
    },
  ];

  return (
    <div className="container">
      <Header />
      <BigPictureCards />
      <Accordion data={accordionData} />
    </div>
  );
};

export default App;
