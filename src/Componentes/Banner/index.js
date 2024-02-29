import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/golden Bridge.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentação}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço! Eu sou Tércio Brandão, estudante de
          programação. Aqui compartilho vários conhecimentos, espero que aprenda
          algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto de Tércio"
        />
      </div>
    </div>
  );
}
