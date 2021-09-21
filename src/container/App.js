import { BrowserRouter } from "react-router-dom";
import Router from "../routes";
import { AuthProvider } from "../context/userContext";
import { ApiProvider } from "../context/apiContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApiProvider>
          <Router />
        </ApiProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
