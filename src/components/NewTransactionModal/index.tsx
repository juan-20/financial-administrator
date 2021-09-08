import { Container } from './styles';
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" name="" id="" />
        <input type="number" placeholder="Valor" name="" id="" />
        <input placeholder="Categoria" name="" id="" />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>

  );
};

export default NewTransactionModal;
