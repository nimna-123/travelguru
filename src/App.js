import './App.css';
import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import SideImage from './components/SideImage';
import ThemeSwitch from './components/ThemeSwitch';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  const show = useSelector((state) => state.lightMode);
  return (
   <Layout>
    <SideImage/>
    <div className={show?'col-md-5 formbgD':'col-md-5 formbg'}>
      <div className='formPad'>
        <div className='SwitchAlignLight'>
          <h3>Travel guru</h3>
          <div className='borderLight'></div>
        <ThemeSwitch/>
       </div> 
        <SignUpForm/>
        <span className={show?'ord':'orl'}>-OR-</span>
        <SocialMedia/>
      
        
      </div>
    

    </div>
    
   </Layout>
  );
}

export default App;
