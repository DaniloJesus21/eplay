import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 16px 0;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
