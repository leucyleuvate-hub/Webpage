import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import Research from './components/Research';
import Technology from './components/Technology';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Ingredients />
      <Research />
      <Technology />
      <Trust />
      <Footer />
    </div>
  );
}
export default App;
