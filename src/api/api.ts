import { Player } from '../models/models'

const server: string = import.meta.env.VITE_SANTA_API || ''

/**
 * Service for API request.
 *
 * @function getPlayers
 * @returns { Promise<Player[]> }
 */
export const getPlayers = async (): Promise<Player[]> => {
  return new Promise(resolve =>
    resolve([
      {
        name: { first: 'Felipa', last: 'Gleichner' },
        age: 18,
        email: 'felipa.gleichner@marques.com',
        phone: '+353 87 841 2044',
        wishlist: ['Chips', 'Fish', 'Chicken', 'Chair']
      },
      {
        name: { first: 'Shemar', last: 'Block' },
        age: 60,
        email: 'shemar.block@omari.org',
        phone: '+353 86 351 7310',
        wishlist: ['Chips', 'Towels', 'Chair']
      },
      {
        name: { first: 'Bethel', last: 'Mayer' },
        age: 31,
        email: 'bethel.mayer@julie.info',
        phone: '+353 87 608 5438',
        wishlist: ['Shirt', 'Table', 'Keyboard', 'Shoes']
      },
      {
        name: { first: 'Jewell', last: 'Skiles' },
        age: 50,
        email: 'jewell.skiles@dedrick.name',
        phone: '+353 86 080 4127',
        wishlist: ['Fish', 'Shoes', 'Cheese', 'Pizza']
      },
      {
        name: { first: 'Angelina', last: 'Koss' },
        age: 78,
        email: 'angelina.koss@brent.com',
        phone: '+353 87 419 1093',
        wishlist: ['Keyboard', 'Bacon', 'Pizza', 'Bike']
      },
      {
        name: { first: 'Maxine', last: 'Batz' },
        age: 88,
        email: 'maxine.batz@hailee.name',
        phone: '+353 89 896 1972',
        wishlist: ['Gloves', 'Bike', 'Cheese', 'Sausages']
      },
      {
        name: { first: 'Oral', last: 'Wisozk' },
        age: 29,
        email: 'oral.wisozk@alexandrea.name',
        phone: '+353 87 605 6016',
        wishlist: ['Ball', 'Sausages', 'Table']
      },
      {
        name: { first: 'Alice', last: 'Wiza' },
        age: 56,
        email: 'alice.wiza@juana.name',
        phone: '+353 89 598 2877',
        wishlist: ['Soap', 'Computer']
      },
      {
        name: { first: 'Esta', last: 'Little' },
        age: 22,
        email: 'esta.little@harvey.info',
        phone: '+353 87 776 9201',
        wishlist: ['Bacon', 'Chair', 'Towels', 'Table']
      },
      {
        name: { first: 'Tillman', last: 'Donnelly' },
        age: 70,
        email: 'tillman.donnelly@tyrel.net',
        phone: '+353 83 305 5767',
        wishlist: ['Mouse', 'Keyboard', 'Chips', 'Cheese', 'Bacon', 'Table']
      },
      {
        name: { first: 'Davin', last: 'Hettinger' },
        age: 43,
        email: 'davin.hettinger@hilton.org',
        phone: '+353 86 978 8457',
        wishlist: ['Sausages', 'Fish']
      },
      {
        name: { first: 'Jerel', last: 'Cronin' },
        age: 62,
        email: 'jerel.cronin@catalina.net',
        phone: '+353 86 338 0774',
        wishlist: ['Shirt', 'Bacon', 'Chair', 'Gloves', 'Bike', 'Soap']
      },
      {
        name: { first: 'Morgan', last: 'Emmerich' },
        age: 60,
        email: 'morgan.emmerich@electa.biz',
        phone: '+353 83 728 1240',
        wishlist: ['Bike', 'Pizza', 'Sausages', 'Towels', 'Tuna', 'Chips']
      },
      {
        name: { first: 'Wilfredo', last: 'Pfeffer' },
        age: 85,
        email: 'wilfredo.pfeffer@courtney.biz',
        phone: '+353 87 390 4192',
        wishlist: ['Computer', 'Shoes', 'Salad', 'Bacon']
      },
      {
        name: { first: 'Avery', last: 'Bauch' },
        age: 25,
        email: 'avery.bauch@emmy.com',
        phone: '+353 85 730 3308',
        wishlist: ['Sausages', 'Towels', 'Tuna', 'Chair', 'Bacon']
      },
      {
        name: { first: 'Tia', last: 'Watsica' },
        age: 72,
        email: 'tia.watsica@simeon.info',
        phone: '+353 83 250 0333',
        wishlist: ['Ball', 'Soap', 'Keyboard', 'Shoes']
      },
      {
        name: { first: 'Patrick', last: 'Gutkowski' },
        age: 25,
        email: 'patrick.gutkowski@cesar.org',
        phone: '+353 89 998 6933',
        wishlist: ['Salad', 'Keyboard']
      },
      {
        name: { first: 'Allison', last: 'Upton' },
        age: 63,
        email: 'allison.upton@trudie.org',
        phone: '+353 87 832 9861',
        wishlist: ['Chips', 'Shoes']
      },
      {
        name: { first: 'Carrie', last: 'Herman' },
        age: 76,
        email: 'carrie.herman@leif.org',
        phone: '+353 83 769 4193',
        wishlist: ['Towels', 'Ball', 'Chips', 'Tuna', 'Car', 'Hat']
      },
      {
        name: { first: 'Liliane', last: 'Moore' },
        age: 87,
        email: 'liliane.moore@jeffry.com',
        phone: '+353 85 553 1501',
        wishlist: ['Hat', 'Car', 'Ball', 'Shirt']
      },
      {
        name: { first: 'Devon', last: 'Gibson' },
        age: 62,
        email: 'devon.gibson@israel.biz',
        phone: '+353 87 024 3680',
        wishlist: ['Table', 'Chair', 'Soap', 'Cheese', 'Chips']
      },
      {
        name: { first: 'Rose', last: 'Pacocha' },
        age: 56,
        email: 'rose.pacocha@shaina.org',
        phone: '+353 87 179 2551',
        wishlist: ['Computer', 'Pants']
      },
      {
        name: { first: 'Oliver', last: 'Zemlak' },
        age: 84,
        email: 'oliver.zemlak@ned.org',
        phone: '+353 83 385 2323',
        wishlist: ['Cheese', 'Car', 'Mouse', 'Pizza']
      },
      {
        name: { first: 'Viviane', last: 'Cremin' },
        age: 87,
        email: 'viviane.cremin@april.info',
        phone: '+353 86 006 3043',
        wishlist: ['Chicken', 'Car', 'Computer', 'Pizza', 'Towels']
      },
      {
        name: { first: 'Karianne', last: 'Zboncak' },
        age: 87,
        email: 'karianne.zboncak@keyon.org',
        phone: '+353 87 019 6057',
        wishlist: ['Bike', 'Pants', 'Table', 'Soap', 'Shoes']
      },
      {
        name: { first: 'Gerald', last: 'Hoeger' },
        age: 23,
        email: 'gerald.hoeger@obie.name',
        phone: '+353 85 344 9180',
        wishlist: ['Towels', 'Pizza']
      },
      {
        name: { first: 'Charles', last: 'Krajcik' },
        age: 73,
        email: 'charles.krajcik@lorna.name',
        phone: '+353 86 478 1322',
        wishlist: ['Mouse', 'Chair', 'Bike']
      },
      {
        name: { first: 'Lila', last: 'Leffler' },
        age: 63,
        email: 'lila.leffler@maryam.name',
        phone: '+353 86 248 6799',
        wishlist: ['Hat', 'Pants']
      },
      {
        name: { first: 'Kelsi', last: 'Fritsch' },
        age: 62,
        email: 'kelsi.fritsch@aisha.com',
        phone: '+353 83 366 7630',
        wishlist: ['Bacon', 'Sausages']
      },
      {
        name: { first: 'Dale', last: 'Jones' },
        age: 37,
        email: 'dale.jones@cordelia.com',
        phone: '+353 87 930 2394',
        wishlist: ['Computer', 'Ball', 'Sausages', 'Shirt', 'Pizza', 'Tuna']
      },
      {
        name: { first: 'Kellen', last: 'Yundt' },
        age: 76,
        email: 'kellen.yundt@broderick.com',
        phone: '+353 86 389 8385',
        wishlist: ['Table', 'Pants', 'Computer', 'Fish', 'Salad', 'Shoes']
      },
      {
        name: { first: 'Jonatan', last: 'Nikolaus' },
        age: 87,
        email: 'jonatan.nikolaus@nicole.name',
        phone: '+353 86 426 0338',
        wishlist: ['Chair', 'Cheese', 'Shirt', 'Pants']
      },
      {
        name: { first: 'Aubree', last: 'Larson' },
        age: 33,
        email: 'aubree.larson@marjolaine.org',
        phone: '+353 87 928 7724',
        wishlist: ['Hat', 'Computer', 'Cheese', 'Shirt', 'Tuna']
      },
      {
        name: { first: 'Otto', last: 'Hodkiewicz' },
        age: 74,
        email: 'otto.hodkiewicz@lincoln.biz',
        phone: '+353 87 014 2336',
        wishlist: ['Keyboard', 'Pants']
      },
      {
        name: { first: 'Helga', last: 'Schultz' },
        age: 38,
        email: 'helga.schultz@willow.org',
        phone: '+353 85 099 1987',
        wishlist: ['Pants', 'Sausages', 'Shoes', 'Tuna', 'Keyboard']
      },
      {
        name: { first: 'Demario', last: 'Gottlieb' },
        age: 63,
        email: 'demario.gottlieb@sydnie.name',
        phone: '+353 86 516 5156',
        wishlist: ['Cheese', 'Ball', 'Shoes']
      },
      {
        name: { first: 'Jayda', last: 'Smith' },
        age: 71,
        email: 'jayda.smith@genesis.name',
        phone: '+353 87 629 4591',
        wishlist: ['Soap', 'Chair', 'Sausages', 'Shoes']
      },
      {
        name: { first: 'Violet', last: 'Pacocha' },
        age: 89,
        email: 'violet.pacocha@demond.com',
        phone: '+353 86 236 4421',
        wishlist: ['Computer', 'Table', 'Car']
      },
      {
        name: { first: 'Jacklyn', last: 'Stoltenberg' },
        age: 49,
        email: 'jacklyn.stoltenberg@keyon.net',
        phone: '+353 89 210 5205',
        wishlist: [
          'Mouse',
          'Gloves',
          'Ball',
          'Soap',
          'Computer',
          'Chair',
          'Shirt'
        ]
      },
      {
        name: { first: 'Chyna', last: 'Wuckert' },
        age: 69,
        email: 'chyna.wuckert@micaela.com',
        phone: '+353 89 764 3496',
        wishlist: [
          'Sausages',
          'Pants',
          'Pizza',
          'Hat',
          'Chair',
          'Ball',
          'Gloves'
        ]
      },
      {
        name: { first: 'Brooks', last: 'Schulist' },
        age: 75,
        email: 'brooks.schulist@frederik.org',
        phone: '+353 83 163 8083',
        wishlist: ['Table', 'Soap', 'Bike']
      },
      {
        name: { first: 'Tressie', last: 'Langosh' },
        age: 67,
        email: 'tressie.langosh@ottis.biz',
        phone: '+353 85 638 1953',
        wishlist: ['Salad', 'Shirt', 'Soap', 'Bacon']
      },
      {
        name: { first: 'Serena', last: 'Stark' },
        age: 67,
        email: 'serena.stark@libby.net',
        phone: '+353 85 878 1663',
        wishlist: ['Car', 'Gloves', 'Fish', 'Hat']
      },
      {
        name: { first: 'Valentina', last: 'Ruecker' },
        age: 52,
        email: 'valentina.ruecker@turner.net',
        phone: '+353 85 558 1225',
        wishlist: ['Keyboard', 'Bacon']
      },
      {
        name: { first: 'Burley', last: 'Oberbrunner' },
        age: 24,
        email: 'burley.oberbrunner@jameson.biz',
        phone: '+353 85 304 0180',
        wishlist: ['Gloves', 'Chips', 'Shoes', 'Pizza']
      },
      {
        name: { first: 'Lewis', last: 'Kuhn' },
        age: 66,
        email: 'lewis.kuhn@novella.com',
        phone: '+353 87 039 5146',
        wishlist: ['Chips', 'Salad']
      },
      {
        name: { first: 'Dee', last: 'Bode' },
        age: 86,
        email: 'dee.bode@everett.com',
        phone: '+353 87 329 1005',
        wishlist: ['Cheese', 'Keyboard', 'Towels', 'Hat', 'Gloves']
      },
      {
        name: { first: 'Kaci', last: 'Krajcik' },
        age: 85,
        email: 'kaci.krajcik@amya.net',
        phone: '+353 86 048 7990',
        wishlist: ['Table', 'Towels', 'Shoes']
      },
      {
        name: { first: 'Eusebio', last: 'Leannon' },
        age: 58,
        email: 'eusebio.leannon@kallie.info',
        phone: '+353 86 335 6696',
        wishlist: ['Chair', 'Gloves', 'Chicken']
      },
      {
        name: { first: 'Juanita', last: 'Skiles' },
        age: 29,
        email: 'juanita.skiles@derick.biz',
        phone: '+353 85 685 2611',
        wishlist: ['Table', 'Chips', 'Mouse', 'Bacon']
      }
    ])
  )
}

export const getPlayersTest = async (): Promise<Player[]> => {
  const response: Response = await fetch(server);
  const players: Player[] = await response.json();
  return players;
}
