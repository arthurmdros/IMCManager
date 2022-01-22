import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from 'pages/Form';
import AllPersons from "pages/AllPersons";
import UpdatePerson from "pages/UpdatePerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<AllPersons />} />
        <Route path="/pessoas/form" element={<Form />} />
        <Route path="/pessoas/update">
            <Route path=":personId" element={<UpdatePerson/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
