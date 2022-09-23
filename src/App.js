import { Route, Router } from 'react-router';
import './App.scss';
import Header from './components/Header/Header';
import Layout from './container/Layout/Layout';


function App() {
  return (
    <div className="app">
      <Header/>
      <Layout/>
    </div>
  );
}

export default App;
