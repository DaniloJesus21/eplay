import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()
  const { data: fightGames } = useGetFightingGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && sportGames && fightGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={simulationGames}
          title="Simulacao"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return (
    <>
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    </>
  )
}

export default Categories
