import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/screens/HomeScreen";
import { LoginContextProvider } from './context/LoginContextProvider';

function App() {

  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App
