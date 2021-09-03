import { Container } from './styles';

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

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" name="" id="" />
        <input type="number" placeholder="Valor" name="" id="" />
        <input placeholder="Categoria" name="" id="" />

        <button type="submit" placeholder="Cadastrar" ></button>

      </Container>
    </Modal>

  );
};

export default NewTransactionModal;
