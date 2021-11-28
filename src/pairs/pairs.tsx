import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PairedPlayers, Player } from '../models/models';
import { UpdateList } from '../store/actions/actions';
import { Card } from '../card/card';
import styles from './pairs.module.scss';

/**
 * Component for generating pairs.
 *
 * @component Pairs
 * @param {object} props Component props
 * @param {Player[]} props.list An array of Players
 * @returns {JSX.Element}
 */
export const Pairs = ({ list }: { list: Player[] }) => {
  const [pairs, setPairs] = useState<PairedPlayers[]>([]);
  const [arranged, setArranged] = useState(false);
  const dispatch = useDispatch();

  /**
   * Updates the original list triggering "UpdateList action and
   * forces a render by toggling "arranged" property value
   * @method rearrange
   * @memberof Pairs
   * @inner
   */
  const rearrange = (): void => {
    dispatch(UpdateList());
    setArranged(!arranged);
  };

  useEffect(() => {
    const length = list.length;
    const newPairs: PairedPlayers[] = [];
    if (length) {
      for (let i = 0; i < length; i++) {
        const next = i + 1;
        const recipientIndex = list[next] ? next : 0;
        newPairs.push({
          from: list[i],
          to: list.slice(recipientIndex, recipientIndex + 1)[0],
        });
      }
      setPairs(newPairs);
    }
  }, [list, setPairs, arranged]);

  return (
    <>
      <button className={styles.button} onClick={rearrange}>
        Rearrange
      </button>
      <ul className={styles.list}>
        {pairs.map((pair: PairedPlayers) => (
          <li className={styles.item} key={pair.from.phone}>
            <Card pair={pair} />
          </li>
        ))}
      </ul>
    </>
  );
};
