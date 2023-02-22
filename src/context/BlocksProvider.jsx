import BlocksContext from './BlocksContext';
import { useEffect, useState } from 'react';
import { fetchBlocks } from '../services/fakeAPI';

export default function BlocksProvider({ children }) {
  const [blockList, setBlockList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  async function getBlocks() {
    const blocks = await fetchBlocks();
    setBlockList(blocks);
  }

  useEffect(() => {
    getBlocks();
  }, []);

  const values = {
    blockList,
    nameFilter,
    setNameFilter,
    locationFilter,
    setLocationFilter,
  };

  return (
    <BlocksContext.Provider value={values}>{children}</BlocksContext.Provider>
  );
}
