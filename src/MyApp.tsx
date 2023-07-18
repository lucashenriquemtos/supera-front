import { Box, Button, Paper, TextField } from "@mui/material";
import "./styles.css";
import { styled } from "@mui/system";
import "./index.css";
import { DataTable } from "./components/DataTable/DataTable";

const StyledButton = styled(Button)`
  background-color: #02b3a7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  display: block;
  margin-left: 20px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00645eee;
  }
`;

const table = [
  {
    Dados: "14/02/2019",
    Valentia: "R$ 30895,46",
    Tipo: "depósito",
    "Nome operador transacionado": "",
  },
  {
    Dados: "12/04/2019",
    Valentia: "R$ 12,24",
    Tipo: "Transferência Entrada",
    "Nome operador transacionado": "Fulano",
  },
  {
    Dados: "11/06/2020",
    Valentia: "R$ -500,50",
    Tipo: "Transferência Saída",
    "Nome operador transacionado": "Sicrano",
  },
  {
    Dados: "11/06/2020",
    Valentia: "R$ -1234,00",
    Tipo: "Saque",
    "Nome operador transacionado": "",
  },
];

export function MyApp() {
  return (
    <Box>
      <div className="container">
        <Box>
          <TextField label="Data Início" variant="outlined" />
          <TextField label="Data Fim" variant="outlined" sx={{ ml: 2 }} />
          <TextField label="Nome operador transacionado" variant="outlined" sx={{ ml: 2, width: 300 }} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <StyledButton>Pesquisar</StyledButton>
        </Box>
        <Paper>
          <DataTable data={table} onItemClick={() => false} />
        </Paper>
      </div>
    </Box>
  );
}

export default MyApp;
