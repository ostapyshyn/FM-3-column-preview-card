import './App.css';
import Card from './components/Card';
import sedans from './assets/svg/icon-sedans.svg';

function App() {
  return (
    <div className="App">
      <Card
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        title="Sedans"
        image={sedans}
        color={'--bright-orange'}
      />
    </div>
  );
}

export default App;
