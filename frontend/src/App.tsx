import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from 'pages/Form';
import AllPersons from "pages/AllPersons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pessoas" element={<AllPersons />} />
        <Route path="/pessoas/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
