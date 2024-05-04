import React from 'react'
import Projetos2 from './Projetos2'
import logo from '../imagens/logo.png'
import kogni from '../imagens/kogni.png'
import airbnb from '../imagens/airbnb.png'

export default function projetos() {
    const projetos = [
        {
          nome: "Sissi",
          imagem: logo,
          descricao: "Projeto da Challenge para o Intituto da Criança e do Adolecente pelo curso de graduação da FIAP de Engenharia de Software, que consiste em ajudar crianças e responsáveis a entenderem os exames que farão."
        },
        {
          nome: "Kogni",
          imagem: kogni,
          descricao: "Projeto da primeira Global Solution para a NotreDame Intermédica - Hapvida que consiste em acompanhar por meio de um aplicativo o desenvolvimento do Alzheimer, coletando dados diários e relatando quais atividades da rotina ajudam ou pioram o avanço da doença."
        },
        {
          nome: "Airbnb",
          imagem: airbnb,
          descricao: "Projeto de Front-End em conjunto com Web Development para aprendermos a utilizar o html, css e javascript, posteriormente adicionando o media query."
        }
      ];
    
      return (
        <div>
          <Projetos2 projetos={projetos} />
        </div>
      );
}
