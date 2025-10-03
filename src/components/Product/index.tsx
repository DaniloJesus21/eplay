import Tag from '../Tag'
import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 85) {
      return `${text.substring(0, 82)}...`
    }
    return text
  }

  const getTitle = (title: string) => {
    if (title.length > 30) {
      return `${title.substring(0, 27)}...`
    }
    return title
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{getTitle(title)}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
