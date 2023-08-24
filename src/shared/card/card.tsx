import { PairedPlayers } from '../../models/models';
import styles from './card.module.scss';

/**
 * Component for card representation.
 *
 * @component Card
 * @param {object} props Component props
 * @param {PairedPlayers} props.pair An object with paired players
 * @returns {JSX.Element}
 */
export const Card = ({ pair }: { pair: PairedPlayers }) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <p className={styles.paragraph}>
          <small>From:</small>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.name}>
            {pair.from.name}
          </span>
        </p>
        <p className={styles.paragraph}>
          <small>To:</small>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.name}>
            {pair.to.name}
          </span>
        </p>
      </div>
    </div>
  );
};
