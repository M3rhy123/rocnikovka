import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="App">
      <header className="App-header">
        <div id='atm_body'>
          <div id='atm_upper'>
            <div id='buttons_left'>
              <div className='btn' id='btn1'>►</div>
              <div className='btn' id='btn2'>►</div>
              <div className='btn' id='btn3'>►</div>
            </div> 
            <div id='display'></div>
            <div id='buttons_right'>
              <div className='btn' id='btn4'>◄</div>
              <div className='btn' id='btn5'>◄</div>
              <div className='btn' id='btn6'>◄</div>
            </div>
        </div>
        </div>
        <a id='credits' href='https://github.com/M3rhy123'>Made by M3RHY</a>
      </header>
      
    </div>
  );
}

export default App;
