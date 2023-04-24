import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/store'
import { shuffleArray } from '../../utils/utils'
import { PairedPlayers, Player } from '../../models/models'
import { updateList } from '../../store/state/players.slice'
import { Card } from '../../shared/card/card'
import styles from './pairs.module.scss'

/**
 * Component for generating pairs.
 *
 * @component Pairs
 * @param {object} props Component props
 * @param {Player[]} props.list An array of Players
 * @returns {JSX.Element}
 */
export const Pairs = ({list } :{ list: Player[] }) => {
  const [pairs, setPairs] = useState<PairedPlayers[]>([])
  const [arranged, setArranged] = useState(false)
  const dispatch = useAppDispatch()
  /**
   * Updates the original list triggering "UpdateList action and
   * forces a render by toggling "arranged" property value
   * @method rearrange
   * @memberof Pairs
   * @inner
   */
  const rearrange = (): void => {
    dispatch(updateList())
    setArranged(!arranged)
  }

  useEffect(() => {
    const length = list.length
    const newPairs: PairedPlayers[] = []
    if (length) {
      const arrange = () => {
        const suffled = shuffleArray(list)
        for (let i = 0; i < length; i++) {
          const next = i + 1
          const recipientIndex = suffled[next] ? next : 0
          newPairs.push({
            from: suffled[i],
            to: list.slice(recipientIndex, recipientIndex + 1)[0]
          })
        }
        setPairs(newPairs)
      }
      arrange()
    }
  }, [list, setPairs, arranged])

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
  )
}
