import Catagories from './components/catagories.component';
import Footer from './components/footer.component';
import NavBar from './components/navbar.components';
import SearchHero from './components/search.component';

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <NavBar/>
      <SearchHero/>
      <Catagories/>
      <Footer/>
    </div>
  );
}

export default App;
