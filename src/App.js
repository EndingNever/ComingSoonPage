import logo from './logo.svg';
import Image from './components/image/Image';
import Body from './components/body/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left'>
          <Body />
        </div>
        <div className='right'>
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;
