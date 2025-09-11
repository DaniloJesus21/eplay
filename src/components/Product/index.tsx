import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.co/222x250" alt="Imagem do jogo" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Window</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        sapiente deleniti dignissimos non molestiae ipsa. Modi vero pariatur
        mollitia quas!
      </Descricao>
    </Card>
  )
}

export default Product
