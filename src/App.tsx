import { TelaInicialListaDeProjetos } from "./components/tela-inicial---lista-de-projetos";
import FileRead from "./file/DataFile";

function App() {


  return (
    <FileRead >
      <TelaInicialListaDeProjetos />
    </FileRead>
  );
}

export default App;
