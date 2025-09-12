import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Playstation 4',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'RPG',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['5%', 'R$ 290,00'],
    system: 'Playstation 5',
    title: 'Diablo 4'
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Star Wars Jedi: Survivor'
  },
  {
    id: 4,
    category: 'RPG',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'PC',
    title: 'The Legend of Zelda'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['17/09'],
    system: 'PC',
    title: 'The Legend of Zelda'
  },
  {
    id: 6,
    category: 'Aventura',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['21/10'],
    system: 'PC',
    title: 'The Legend of Zelda'
  },
  {
    id: 7,
    category: 'Aventura',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['23/11'],
    system: 'PC',
    title: 'The Legend of Zelda'
  },
  {
    id: 8,
    category: 'Aventura',
    description: 'Descrição do jogo',
    image: zelda,
    infos: ['07/12'],
    system: 'PC',
    title: 'The Legend of Zelda'
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="Esportes" background="black" />
    </>
  )
}

export default Categories
