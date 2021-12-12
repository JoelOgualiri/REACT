
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Greeting from './Greeting';
import Activities from './Activities';


function App() {
  const Stuff = Activities.map(activity => {
    return <Card
      key={activity.id}
      image={activity.coverImg}
      rating={activity.stats.rating}
      reviewCount={activity.stats.reviewCount}
      comment={activity.title}
      price={activity.price}
      location={activity.location}
      openSpots={activity.openSpots}
    />
  })
  return (
    <div className="App">

      <Navbar />
      <div className="greeting">
        <Greeting />
      </div>

      <Hero />
      <section className="card--list">
        {Stuff}
      </section>

    </div>
  );
}

export default App;
