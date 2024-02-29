import styles from "./SobreMim.module.css";

import PostModelo from "Componentes/PostModelo";
import fotoSobreMim from "assets/golden Bridge.jpeg";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Tércio!</h3>
      <img
        src={fotoSobreMim}
        alt="Tércio Brandão"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Olá, tudo bom ? Eu sou estudante de Análise e Desenvolvimento de
        Sistemas na faculdade UNINASSAU.
      </p>
      <p className={styles.paragrafo}>
        Minha história com a programação começou quando eu resolvi fazer uma
        transição de carreira lá em 2023 e iniciei fazendo vários cursos de
        Front-End e Back-End, aprendendo lógica básica de programação e utilizo
        mais comumente o JavaScript. Nunca imaginei que gostaria tanto de
        estudar e me dedicar nessa área e busco ainda a minha primeira
        oportunidade.
      </p>
      <p className={styles.paragrafo}>
        Sou formado em Edificações, Segurança do trabalho e hoje estou fazendo,
        como foi mencionado o curso de ADS, além de realiar varios cursos na
        Alura e RocketSeat. Minha última função foi como Agente Socioeducativo
        no estado de Pernambuco, mas venho me capacitando dia após dia, para
        conseguir debutar na área.
      </p>
    </PostModelo>
  );
}
