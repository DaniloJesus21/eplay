import Section from '../Section'
import { Items, Item } from './styles'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src="https://placehold.co/150" alt="Imagem" />
        </Item>
        <Item>
          <img src="https://placehold.co/150" alt="Imagem" />
        </Item>
        <Item>
          <img src="https://placehold.co/150" alt="Imagem" />
        </Item>
        <Item>
          <img src="https://placehold.co/150" alt="Imagem" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
