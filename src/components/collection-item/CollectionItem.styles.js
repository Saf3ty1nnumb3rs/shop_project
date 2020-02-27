import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton'

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
  }
`

export const CustomButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;
  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
  }
`

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }
  .price {
    width: 10%;
  }
`
