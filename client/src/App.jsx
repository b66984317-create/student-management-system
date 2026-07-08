import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <h1>Welcome to the Student Management System</h1>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;