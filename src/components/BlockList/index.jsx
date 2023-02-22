import { useContext } from 'react';
import BlockContext from '../../context/BlocksContext';
import BlockCard from '../BlockCard';
import styles from './style.module.css';

export default function BlockList() {
  const { nameFilter, locationFilter, blockList } = useContext(BlockContext);

  const filteredList = blockList
    .filter(({ name }) => name.includes(nameFilter))
    .filter(({ location }) => location.includes(locationFilter));

  return (
    <main className={styles.main}>
      <div className={styles.line}>
        <h2 className={styles.title}>Blocos recomendados</h2>

        <div className={styles.buttons_wrapper}>
          <button
            type="button"
            className={`${styles.button} ${styles.selected}`}
          >
            Lista
          </button>
          <button type="button" className={styles.button}>
            Mapa
          </button>
        </div>
      </div>

      {filteredList.length ? (
        <ul className={styles.list}>
          {filteredList.map((block) => (
            <li key={block.name}>
              <BlockCard
                image={block.image}
                name={block.name}
                description={block.description}
                location={block.location}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.paragraph}>Nenhum bloco encontrado</p>
      )}
    </main>
  );
}
