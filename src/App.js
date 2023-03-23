import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MintNFT from './MintNFT'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MintNFT/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
