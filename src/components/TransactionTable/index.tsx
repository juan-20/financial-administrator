import { Container } from './styles';


function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td>12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td>12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
};

export default TransactionTable;