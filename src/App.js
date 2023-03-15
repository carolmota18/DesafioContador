import React from "react";
import "./styles.css";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f00699;
`;

const Titulo = styled.h1`
  font-size: 4rem;
  color: #323871;
`;

const Botao = styled.button`
  width: 10vw;
  height: 10vh;
  margin: 3vh;
  border: solid #ffcb47;
  border-radius: 50vw;
  font-size: 1.5rem;
  background-color: #573280;
  color: #ffcb47;
`;

class App extends React.Component {
  state = {
    numero: 0
  };

  Adicionar = () => {
    this.setState({
      numero: this.state.numero < 10 ? this.state.numero + 1 : this.state.numero
    });
  };

  Subtrair = () => {
    this.setState({
      numero: this.state.numero > 0 ? this.state.numero - 1 : this.state.numero
    });
  };

  Zerar = () => {
    this.setState({
      numero: 0
    });
  };

  render() {
    return (
      <Conteiner>
        <Titulo>{this.state.numero}</Titulo>
        <section>
          <Botao onClick={this.Adicionar}>Adicionar</Botao>
          <Botao onClick={this.Subtrair}>Subtrair</Botao>
          <Botao onClick={this.Zerar}> Zerar</Botao>
        </section>
      </Conteiner>
    );
  }
}

export default App;
