import { useState } from 'react'

import Section from '../Section'

import { GalleryItem } from '../../pages/Home'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })

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

  const closeModal = () => {
    setModal({
      type: 'image',
      url: '',
      isVisible: false
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={index}
              onClick={() => {
                setModal({
                  type: media.type,
                  url: media.url,
                  isVisible: true
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} da ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal
        className={modal.isVisible ? 'is-visible' : ''}
        onClick={closeModal}
      >
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Icone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={name} />
          ) : (
            <iframe
              src={modal.url}
              title={name}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          )}
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default Gallery
