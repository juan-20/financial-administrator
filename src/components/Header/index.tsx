import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg'

function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
