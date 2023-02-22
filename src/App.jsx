import Header from './components/Header';
import styles from './App.module.css';
import BlockList from './components/BlockList';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <BlockList />
    </div>
  );
}
