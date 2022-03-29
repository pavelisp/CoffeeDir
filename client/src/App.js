import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="coffees" element={<Home />} />        
      </Routes>

    </Router>
  );
}

export default App;
