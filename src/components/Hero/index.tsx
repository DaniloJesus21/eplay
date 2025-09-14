import banner from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <>
      <Banner style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
          <Infos>
            <h2>Hogwarts Legacy</h2>
            <p>
              <span>De R$ 250,00</span>
              Por apenas R$ 189,99
            </p>
            <Button
              variant="primary"
              title="Clique aqui para adicionar ao carrinho"
              type="button"
            >
              Adicionar ao carrinho
            </Button>
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
