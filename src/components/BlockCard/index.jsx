import { SlLocationPin } from 'react-icons/sl';
import styles from './style.module.css';

export default function BlockCard(props) {
  const { image, name, description, location } = props;
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={name} />
      <div className={styles.text_wrapper}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.location_wrapper}>
          <SlLocationPin className={styles.location_icon} />
          <span className={styles.location}>{location}</span>
        </div>
      </div>
    </div>
  );
}
