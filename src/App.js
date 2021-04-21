import './App.css'
import styled from 'styled-components'

const App = () => {
  return (
    <Content>
      <WrapperImage>
        <ImageLogo src="https://files.larepublica.pe/Larepublica/2021/04/20/eligebien-1618938636.png"/>
      </WrapperImage>
      <WrapperTitle>
        <TitleTop>ÚLTIMAS NOTICIAS</TitleTop>
        <TitleBottom>SEGUNDA VUELTA</TitleBottom>
      </WrapperTitle>
    </Content>
  )
}

export default App

const Content = styled.div`
  position: relative;
  max-width: 974px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-image: url("https://files.larepublica.pe/Larepublica/2021/04/20/banner-segunda-1618935962.png");
  background-repeat: no-repeat;
  background-position-x: center;
  @media (max-width: 600px) {
    background-image: url("https://files.larepublica.pe/Larepublica/2021/04/21/20-banner-segundavueltamobile3-700-1619017783.jpg");
    background-position-x: right;
    background-size: contain;
  }
  @media (max-width: 373px) {
    background-size: cover;
  }
`
const WrapperImage = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  max-width: 351px;
  padding-left: 20px;

  @media (max-width: 850px) {
    padding-top: 5px;
    padding-left: 10px;
    max-width: 300px;
  }
  @media (max-width: 745px) {
    max-width: 240px;
    padding-top: 10px;
  }
  @media (max-width: 650px) {
    max-width: 210px;
    padding-top: 15px;
  }
  @media (max-width: 600px) {
    max-width: 200px;
    top: -18px;
    margin-left: 30px;
  }
`
const ImageLogo = styled.img`
  width: 100%;
`
const WrapperTitle = styled.div`
  padding-top: 14px;
  width: auto;
  height: auto;
  margin-right: 35px;

  @media (max-width: 900px) {
    margin-right: 10px;
  }
  @media (max-width: 790px) {
    margin-right: 5px;
  }
  @media (max-width: 600px) {
    padding-top: 30px;
    padding-left: 30px;
  }
`
const TitleTop = styled.h1`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -2px;
  color: #BD0009;
  text-align: center;
  font-size: 30px;
  height: 25px;
  @media (max-width: 880px) {
    font-size: 25px;
    height: 25px;
  }
  @media (max-width: 745px) {
    font-size: 20px;
    height: 20px;
    padding-top: 5px;
  }
  @media (max-width: 640px) {
    font-size: 17px;
    height: 17px;
    padding-top: 10px;
  }
  @media (max-width: 600px) {
    justify-content: end;
    font-size: 20px;
    height: 20px;
  }
`
const TitleBottom = styled.h1`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: -2px;
  color: #17191E;
  text-align: center;
  font-size: 30px;
  height: 25px;
  @media (max-width: 880px) {
    font-size: 25px;
    height: 25px;
  }
  @media (max-width: 745px) {
    font-size: 20px;
    height: 20px;
    padding-top: 5px;
  }
  @media (max-width: 640px) {
    font-size: 17px;
    height: 17px;
    padding-top: 10px;
  }
  @media (max-width: 600px) {
    justify-content: end;
    font-size: 20px;
    height: 20px;
  }
`