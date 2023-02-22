import { useEffect, useState } from 'react';
import { fetchBlocks } from '../../services/fakeAPI';
import BlockCard from '../BlockCard';

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
    <main>
      <div>
        <h2>Blocos recomendados</h2>

        <div>
          <button type="button">Lista</button>
          <button type="button">Mapa</button>
        </div>
      </div>

      <ul>
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
