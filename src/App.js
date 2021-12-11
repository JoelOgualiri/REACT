
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Greeting from './Greeting';
import Activities from './Activities';


function App() {
  const Stuff = Activities.map(activity => {
    return <Card
      image={activity.image}
      rating={activity.rating}
      review={activity.review}
      comment={activity.comment}
      price={activity.price}
    />
  })
  return (
    <div className="App">

      <Navbar />
      <Greeting />
      <Hero />
      <section className="card--list">
        {Stuff}
      </section>

    </div>
  );
}

export default App;
