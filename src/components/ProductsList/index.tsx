import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.co/222x250"
            infos={['-10%', 'R$ 99,99']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.co/222x250"
            infos={['-10%', 'R$ 99,99']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.co/222x250"
            infos={['-10%', 'R$ 99,99']}
            system="Windows"
            title="Nome do Jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.co/222x250"
            infos={['-10%', 'R$ 99,99']}
            system="Windows"
            title="Nome do Jogo"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
