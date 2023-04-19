import React,{useState, useEffect} from 'react'
import { Route, Redirect, BrowserRouter as Router, Routes ,Link } from 'react-router-dom';
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from './components/navbar'
import Intro from './components/Intro'
import Contact from './components/contact'
import Aboutus from './components/aboutus'
import Services from './components/services'
import Blog from './components/blog'
import Login from'./components/login'
const alanKey='d1c1438566feb75faf4cf2a75341725b2e956eca572e1d8b807a3e2338fdd0dc/stage';

 
function App() {

  // const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/login');
  // };
  // const [onlineDoctors, setOnlineDoctors] = useState([]);
  // useEffect(() => {
  //   // fetch data from API or database
  //   const data = [
  //     { name: 'Dr. Smith', online: true },
  //     { name: 'Dr. Patel', online: false },
  //     { name: 'Dr. Lee', online: true },
  //     { name: 'Dr. Gupta', online: true },
  //   ];

  //   // filter online doctors and set state
  //   const onlineDocs = data.filter(doc => doc.online);
  //   setOnlineDoctors(onlineDocs);
  // }, []);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({commandData}) => {
        if (commandData === 'testCommand') {
          alert('This is mediLink')
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);
  return (
    <div>
    <Navbar/>
    <Intro/>
    <Contact/>
    <Aboutus/>
    <Services/>
    <Blog/>
    </div>
  );
}
export default App
