import logo from './logo.svg';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import {useEffect} from 'react'

function App() {
  useEffect(() => {

    alanBtn({
      
        key: '49ac600b71e1e1a5a74479ca93fc07692e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
          }
        }
    });
    
  }, []);
  return (
    <><div className="App">
    <div className='title'>
        <h1>Medi-Bot : Your personal health companion,<br />always ready to chat and help you stay on top <br />of you wellness journey!</h1>
        <p id='desc'>
          Describe your issue to our chatbot and get details of the doctor according to your symptomps and issue. <br/>
          Medibot is designed to be user-friendly and responsive, allowing users to quickly and easily <br/>find the medical care they need. 
        </p>
      </div><button>Go to chat</button>
      </div></>
  );
}

export default App;
