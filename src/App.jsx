
import { useState } from 'react';
import onbulb from './assets/on.png';
import offbulb from './assets/off.png';
import './App.css'

function App() {
  const [hideImage, setHideImage] = useState(false);
  function hideImageByButton() {
    setHideImage(!hideImage); // Ager ture ha tu false kardo   // Ager false ha tu true kardo 
  }
  

  return (
    <div className={`container ${hideImage ? 'bg-on' : 'bg-off'}`}>
      <div className="box">
        <h2><b>Toggle-Web-App</b></h2><br />
        <h1 className={`h1 ${hideImage ? 'h1-on' : 'h1-off'}`}><b>Bulb</b></h1>
      {hideImage === false ?(
        <img src={offbulb} alt="" />
      ) :
      <img src={onbulb} alt="" />
      
      }
      <button className={`button ${hideImage ? 'b-on':'b-off'}`} onClick={hideImageByButton}>{hideImage === false ? 'On' : 'Off'}</button>
      </div>
    </div>
  );
}

export default App;






// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isBulbOn, setIsBulbOn] = useState(false);

//   const toggleBulb = () => {
//     setIsBulbOn(!isBulbOn);
//   };

//   return (
//     <div className={`container ${isBulbOn ? 'bg-on' : 'bg-off'}`}>
//       <h1>💡 Hide & Show Bulb</h1>

//       <div className="bulb-wrapper">
//         <div className={`bulb-container ${isBulbOn ? 'on' : 'off'}`}>
//           <img
//             className="bulb-image"
//             src={
//               isBulbOn
//                 ? 'https://media.istockphoto.com/id/485082638/photo/standing-illuminated-light-bulb-with-copy-space.jpg?s=612x612&w=0&k=20&c=ZbqIH9GILps6jS48E9VAv8W1O2sdfX-A7vF-hwobJOo='
//                 : 'https://media.istockphoto.com/id/113657002/photo/isolated-shot-of-light-bulb-on-white-bright-background.jpg?s=612x612&w=0&k=20&c=ymeEBbG__QC1-21VCZf52vXz5Nmdq-tenEhchPhoMRQ='
//             }
//             alt="Bulb"
//           />
//           {isBulbOn && <div className="inner-glow" />}
//         </div>
//       </div>

//       <button onClick={toggleBulb} className="toggle-button">
//         {isBulbOn ? 'Turn OFF' : 'Turn ON'}
//       </button>
//     </div>
//   );
// }

// export default App;
