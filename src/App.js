import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Main from './components/Main';
import Secondary from './components/Secondary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Main />} />

        <Route path="todolist" element={<Secondary />} />
      </Route>
    </Routes>
  );
}

export default App;
