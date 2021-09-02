import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'

// o modal esta em app tsx e ele vem como prop que tras a função que esta no outro arquivo
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
