import Card from './components/Card';
import cars from './assets/data/cars';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.App}>
      <div className={styles.cars}>
        {cars.map((car, index) => {
          return (
            <Card
              text={car.text}
              key={index}
              title={car.title}
              image={car.image}
              color={car.color}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
