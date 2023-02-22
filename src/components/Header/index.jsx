import { BsSearch } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import topLeftImg from '../../assets/hero-top-left-ilustration.svg';
import topRightImg from '../../assets/hero-bottom-right-ilustration.svg';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.texts}>
        <p className={styles.paragraph}>Find your block</p>
        <h1 className={styles.title}>
          Encontre os <span className={styles.emphasis}>melhores blocos</span>
          &nbsp; de carnaval de 2023
        </h1>
      </div>

      <div className={styles.search_bar}>
        <div className={styles.input_wrapper}>
          <BsSearch className={styles.icon} />
          <input
            type="text"
            placeholder="Pesquise por nome"
            name=""
            id=""
            className={styles.input}
          />
        </div>

        <div className={styles.input_wrapper}>
          <SlLocationPin className={styles.icon} />
          <select name="" id="" className={styles.select}>
            <option value="">Selecione uma cidade</option>
          </select>
        </div>

        <button type="button" className={styles.button}>
          Buscar agora
        </button>
      </div>

      <img src={topLeftImg} className={styles.ilustration} alt="" />
      <img src={topRightImg} className={styles.ilustration} alt="" />
    </header>
  );
}
