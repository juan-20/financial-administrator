import { Container } from './styles';

import incomeImg from '../../assets/income.svg'
import outomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


export function Sumary() {
  return (
    <Container>
      <div className="">
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 100</strong>
      </div>

      <div className="">
        <header>
          <p>Saídas</p>
          <img src={outomeImg} alt="Saídas" />
        </header>
        <strong>R$ 100</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 100</strong>
      </div>


    </Container>
  );
};
