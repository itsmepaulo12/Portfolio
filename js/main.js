const textos = {
  pt: {
    titulo:
      'Paulo – Desenvolvedor Front-End | <strong class="destaque"> Criador Apaixonado por Tecnologia e arte.</strong>',
    descricaoPrimeiro:
      "Sou um desenvolvedor front-end comprometido em transformar ideias criativas em experiências digitais funcionais e envolventes. Com um olhar apurado para design e uma paixão constante por inovação tecnológica, busco unir arte ao desenvolvimento de interfaces digitais modernas e intuitivas.",
    descricaoSegundo:
      "Tenho um forte interesse por aprendizado contínuo, sempre me atualizando com as melhores práticas e tendências do mercado, além de estar em uma jornada para me tornar fluente em inglês e expandir minhas oportunidades profissionais globais.",
    tituloCompetencias: 
      "Principais Competências",
    descricaoTerceiro: 
      "Desenvolvimento de interfaces responsivas com foco em usabilidade. Domínio de tecnologias modernas como HTML, CSS, JavaScript e frameworks CSS como Bootstrap 5 e Tailwind.",
    descricaoQuarto:
      "Forte senso estético para design e experiência do usuário. Capacidade de trabalho em equipe e resolução criativa de problemas. Sempre aberto a colaborar em projetos inovadores que promovam a integração de tecnologia.",
    tituloProjetos:
      "Principais projetos",
    verMais:
      "Ver mais",
    exampleModalLabel:
      "Projetos",
    closeButton:
      "Fechar",
    minhasRedes:
      "Acesse minhas redes:",
    descricaoFooter:
      'Desenvolvido por <a href="https://instagram.com/__itsmepaulo" target="_blank">Paulo Henrique</a>'
  },
  en: {
    titulo:
      'Paulo - Front-End Developer | <strong class="destaque">Creator Passionate about technology and art.</strong> ',
    descricaoPrimeiro:
      "I'm a front-end developer committed to transforming creative ideas into functional and engaging digital experiences. With a keen eye for design and a constant passion for technological innovation, I seek to unite art with the development of modern and intuitive digital interfaces.",
    descricaoSegundo:
      "I have a strong interest in continuous learning, always keeping up to date with best practices and market trends, as well as being on a journey to become fluent in English and expand my global professional opportunities.",
    tituloCompetencias: 
      "Core Competencies",
    descricaoTerceiro:
      "Development of responsive interfaces with a focus on usability. Proficient in modern technologies such as HTML, CSS, JavaScript, and CSS frameworks like Bootstrap 5 and Tailwind.",
    descricaoQuarto:
      "Forte senso estético para design e experiência do usuário. Capacidade de trabalho em equipe e resolução criativa de problemas. Sempre aberto a colaborar em projetos inovadores que promovam a integração de tecnologia.",
    tituloProjetos:
      "Featured projects",
    verMais:
      "See more",
    exampleModalLabel:
      "Projects",
    closeButton:
      "Close",
    minhasRedes:
      "Connect with me on social media:",
    descricaoFooter:
      'Designed and developed by <a href="https://instagram.com/__itsmepaulo" target="_blank">Paulo Henrique</a>'
  },
};
function trocarIdioma(idioma) {
  document.getElementById("titulo").innerHTML = textos[idioma].titulo;
  document.getElementById("descricaoPrimeiro").innerHTML = textos[idioma].descricaoPrimeiro;
  document.getElementById("descricaoSegundo").innerHTML = textos[idioma].descricaoSegundo;
  document.getElementById("tituloCompetencias").innerHTML = textos[idioma].tituloCompetencias;
  document.getElementById("descricaoTerceiro").innerHTML = textos[idioma].descricaoTerceiro;
  document.getElementById("descricaoQuarto").innerHTML = textos[idioma].descricaoQuarto;
  document.getElementById("tituloProjetos").innerHTML = textos[idioma].tituloProjetos;
  document.getElementById("verMais").innerHTML = textos[idioma].verMais;
  document.getElementById("exampleModalLabel").innerHTML = textos[idioma].exampleModalLabel;
  document.getElementById("closeButton").innerHTML = textos[idioma].closeButton;
  document.getElementById("minhasRedes").innerHTML = textos[idioma].minhasRedes;
  document.getElementById("descricaoFooter").innerHTML = textos[idioma].descricaoFooter;
  document.documentElement.lang = idioma;
}
