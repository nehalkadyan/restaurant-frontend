import './App.css';
import Navbar from './components/Navbar/Navbar';
import {AboutUs, Chef, FindUs, Footer, Header, Gallery, Intro, Laurels, SpecialMenu} from './container';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
    
  );
}

export default App;
