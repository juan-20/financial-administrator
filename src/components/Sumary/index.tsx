import { Container } from './styles';

import incomeImg from '../../assets/income.svg'
import outomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../context/TransactionsContext';
import { useContext } from 'react';
import { transitions } from 'polished';

export function Sumary() {
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount
  //   }

  //   return acc
  // }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposists += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc

  }, {
    deposists: 0,
    withdraws: 0,
    total: 0
  })

  console.log(transactions)

  return (
    <Container>
      <div className="">
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ {summary.deposists}</strong>
      </div>

      <div className="">
        <header>
          <p>Saídas</p>
          <img src={outomeImg} alt="Saídas" />
        </header>
        <strong>R$ {summary.withdraws}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ {summary.total}</strong>
      </div>


    </Container>
  );
};
