import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'

import hogwarts from '../../assets/images/fundo_hogwarts.png'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'video' | 'image'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: hogwarts
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={index}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} da ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de fechar" />
          </header>
          <img src={defaultCover} alt={name} />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Gallery
