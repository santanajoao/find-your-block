import { BsSearch } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import topLeftImg from '../../assets/hero-top-left-ilustration.svg';
import topRightImg from '../../assets/hero-bottom-right-ilustration.svg';
import styles from './style.module.css';
import { useContext, useState } from 'react';
import BlocksContext from '../../context/BlocksContext';

export default function Header() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const { blockList, setNameFilter, setLocationFilter } =
    useContext(BlocksContext);

  const cities = blockList.reduce((cities, { location }) => {
    return cities.includes(location) ? cities : [...cities, location];
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setNameFilter(search);
    setLocationFilter(city);
  }

  return (
    <header className={styles.header}>
      <div className={styles.texts}>
        <p className={styles.paragraph}>Find your block</p>
        <h1 className={styles.title}>
          Encontre os <span className={styles.emphasis}>melhores blocos</span>
          &nbsp; de carnaval de 2023
        </h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.search_bar}>
        <div className={styles.input_wrapper}>
          <BsSearch className={styles.icon} />
          <input
            value={search}
            type="text"
            placeholder="Pesquise por nome"
            onChange={({ target }) => setSearch(target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.select_wrapper}>
          <SlLocationPin className={styles.icon} />
          <select
            value={city}
            onChange={({ target }) => setCity(target.value)}
            className={styles.select}
          >
            <option value="">Selecione uma cidade</option>
            {cities.map(($city, index) => (
              <option key={index} value={$city}>
                {$city}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.button}>
          Buscar agora
        </button>
      </form>

      <img src={topLeftImg} className={styles.ilustration} alt="" />
      <img src={topRightImg} className={styles.ilustration} alt="" />
    </header>
  );
}
