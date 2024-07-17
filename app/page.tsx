import Header from './components/Header';
import FirstContainer from './components/FirstContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import Scene from './components/Scene';

export default function Home() {
  return (
    <main>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer/>
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}
