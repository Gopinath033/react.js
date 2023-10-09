import { useState } from 'react';
import AddText from './AddText';
import './App.css';
import ColorBox from './ColorBox';
import ToogleButton from './ToogleButton';

function App() {
  let [textColor, setTextColor] = useState('black')
  let [bgColor, setBgColor] = useState('')

    const handleTextColor = () =>{
        textColor = (textColor === 'black') ? 'White' : 'black'
        setTextColor(textColor)
    }

  return (
    <div className='main'>
    <ColorBox 
      textColor = {textColor}
      bgColor = {bgColor}
     
    />
    <AddText 
      bgColor = {bgColor}
      setBgColor = {setBgColor}

    />
    <ToogleButton 
       handleTextColor = {handleTextColor}
    />
    </div>
  );
}

export default App;
