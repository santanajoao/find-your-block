import { useEffect, useState } from 'react';
import { fetchBlocks } from '../../services/fakeAPI';
import BlockCard from '../BlockCard';
import styles from './style.module.css';

export default function BlockList() {
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    getBlocks();
  }, []);

  async function getBlocks() {
    const blocks = await fetchBlocks();
    setBlockList(blocks);
  }

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

      <ul className={styles.list}>
        {blockList.map((block) => (
          <li>
            <BlockCard
              image={block.image}
              name={block.name}
              description={block.description}
              location={block.location}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
