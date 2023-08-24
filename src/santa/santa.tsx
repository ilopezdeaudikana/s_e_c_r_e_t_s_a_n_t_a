import { useGetPlayersQuery } from '../store/queries/players.query'
import { Pairs } from './pairs/pairs'
import styles from './santa.module.scss'

/**
 * Santa Component dispatches FetchPlayers action and passes down player raw list to Pairs component.
 *
 * @component Santa
 * @returns {JSX.Element}
 */
export const Santa = () => {
  const { data, isError, isLoading } = useGetPlayersQuery('')

  return (
    <div>
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Secret Santa application</h1>
              <p className={styles.description}>
                Below is a list of the secret santa pairings.
              </p>
            </div>
            <section className={styles.main}>
              {data && <Pairs list={data} />}
            </section>
          </div>
        </>
      ) : null}
    </div>
  )
}
