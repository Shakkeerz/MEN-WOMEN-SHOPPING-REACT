
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Mens_collection from './components/Mens_collection';
import News_letter from './components/News_letter';
import Women_collections from './components/Women_collections';

function App() {
  return (
    <div className="container mx-auto p-5">
      <Header/>
      <Hero/>
      <Mens_collection/>
      <Women_collections/>
      <News_letter/>
      <Footer/>

    </div>
  );
}

export default App;
