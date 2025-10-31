import { useEffect, useState } from 'react';
import './App.css'
// import clsx from "clsx";
import AddUserPages from './pages/AddUserPages/AddUserPages.jsx';
import IsClick from './components/IsClick/IsClick.jsx';

function App() {
  const [isClick, setIsClick] = useState(true);
  const [color, setColor] = useState("");

  useEffect(() => {
    // console.log(`useEffect1`);
    // console.log(`isClick`, isClick);
    // console.log(`color`, color);
  }, [isClick]);


  return (
    <div>
      {isClick ? (
        <AddUserPages
          isClick={isClick}
          setIsClick={setIsClick}
          setColor={setColor}
        />
      ) : (
        <IsClick isClick={isClick} color={color} setIsClick={setIsClick} />
      )}
    </div>
  );
}

export default App
