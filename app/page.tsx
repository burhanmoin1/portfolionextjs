import Header from './components/Header';
import FirstContainer from './components/FirstContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer/>
      <Portfolio />
    </main>
  );
}
