import './App.css';
import MyParent from './components/MyParent'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainContent/>
      <Gallery/>
      <Footer/>

      <Navigation/>
    </div>
  );
}

export default App;

//<ComponentName/>