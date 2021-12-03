import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FetchPlayers } from '../store/actions/actions';
import { Pairs } from './pairs/pairs';
import { State } from '../models/models';
import styles from './santa.module.scss';

/**
 * Santa Component dispatches FetchPlayers action and passes down player raw list to Pairs component.
 *
 * @component Santa
 * @returns {JSX.Element}
 */
export const Santa = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: State) => state.players);

  useEffect(() => {
    dispatch(FetchPlayers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <h1 className={styles.title}>Secret Santa application</h1>
      <p className={styles.description}>
        Below is a list of the secret santa pairings.
      </p>
      </div>
      <section className={styles.main}>
        <Pairs list={list} />
      </section>
    </div>
  );
};
