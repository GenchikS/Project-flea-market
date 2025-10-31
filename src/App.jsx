import { useEffect, useState } from "react";
import css from "./App.module.css";
import AddUserPages from "./pages/User/AddUserPages/AddUserPages.jsx";
import IsClick from "./components/IsClick/IsClick.jsx";
import UserPages from "./pages/User/UserPages/UserPages.jsx";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [userAdd, setUserAdd] = useState(false)
  const [color, setColor] = useState("");

  useEffect(() => {

  }, [isClick, userAdd]);

  return (
    <div className={css.containerApp}>
      {!userAdd ? (
        <UserPages setUserAdd={setUserAdd} setIsClick={setIsClick} />
      ) : isClick ? (
        <AddUserPages setIsClick={setIsClick} setColor={setColor} />
      ) : (
        <IsClick
          color={color}
          setIsClick={setIsClick}
          setUserAdd={setUserAdd}
        />
      )}
      {/* <div className={css.containerApp}> */}

      {/* </div> */}
    </div>
  );
}

export default App;
