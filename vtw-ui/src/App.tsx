import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes";
import ToastrContainer from "./components/toastr";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <ToastrContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
