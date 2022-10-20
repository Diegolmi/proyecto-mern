import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from '../src/components/rutas/Rutas';
import Navegador from '../src/components/navegador/Navegador';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navegador />
    <div className="App">
      <Rutas />
    </div>
    <Footer />
    
    </>
  );
}

export default App;
