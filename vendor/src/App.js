import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Vendor</h1>
        </Container>
      </main>
      <HomeScreen/>
    </div>
  );
}

export default App;
