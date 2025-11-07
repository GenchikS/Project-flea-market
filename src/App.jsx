import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import css from "./App.module.css";
import UserPages from "./pages/User/UserPages/UserPages.jsx";
import UserDate from "./pages/User/UserData/UserData.jsx";
import {
  fetchArticleUserAll,
  fetchArticleUserId,
  fetchArticleUserName,
  fetchArticleUserEmail,
} from "./articles-api.js";

// http://localhost:3000/users
function App() {
  const [isClick, setIsClick] = useState(true);
  const [userAdd, setUserAdd] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [color, setColor] = useState("");
  const [loadig, setLoading]= useState(false)
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState();
  const [response, setResponse] = useState([]);
  // const [userEmail, setUserEmail] = useState([])

  const handleSearchId = async (name) => {
    // console.log(`name`, name);
    
    try {
      setUserData([]);
      setLoading(true);
      setError(false);
      const response = await fetchArticleUserId(name);
      
      const responseOne = response.data.data;
      // console.log(`response`, response);
      if (!response) {
        setResponse([]);
        setError(true);
        console.log(`error`, error);
        return;
      }
      setUserData(responseOne);
    } catch (error) {
      setError(true);
    }
    finally {
      setLoading(false);
    }
  };

  const handleSearchName = async (name) => {
    // console.log(`name`, name);
    try {
      
      setUserData([]);
      setLoading(true);
      setError(false);
      const response = await fetchArticleUserName(name);
      // console.log(`response`, response);
      if (!response) {
        setResponse([]);
        setError(true);
        // console.log(`error`, error)
      return }
      const responseOne = response;
      setUserData(responseOne);
    } catch (error) {
      setError(true);
    }
    finally {
      setLoading(false);
    }
  };


   const handleSearchEmail= async (name) => {
    //  console.log(`name`, name);
     try {
       setUserData([]);
       setLoading(true);
       setError(false);
       const response = await fetchArticleUserEmail(name);
       //  console.log(`response`, response);
       if (!response) {
         setResponse([]);
         setError(true);
         console.log(`error`, error);
         return;
       }
      const responseOne = response;
       setUserData(responseOne);
     } catch (error) {
       setError(true);
     } finally {
       setLoading(false);
     }
   };



  {
    useEffect(() => {
      async function fetchUser() {
        try {
          setLoading(true);
          setResponse([]);
          const response = await fetchArticleUserAll();
          setResponse(response.data.data);
          // console.log('response', response.data.data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchUser();
      // }
    }, [isClick, userAdd, userUpdate, deleteUser, userData]);}

  return (
    <div className={css.containerApp}>
      <Routes>
        <Route
          path="/"
          element={
            isClick && (
              <UserPages
                setIsClick={setIsClick}
                setUserAdd={setUserAdd}
                setUserUpdate={setUserUpdate}
                setDeleteUser={setDeleteUser}
                response={response}
                loadig={loadig}
                error={error}
                handleSearchId={handleSearchId}
                handleSearchName={handleSearchName}
                handleSearchEmail={handleSearchEmail}
                userData={userData}
              />
            )
          }
        />
        <Route
          path="/update"
          element={
            !isClick && (
              <UserDate
                setIsClick={setIsClick}
                setUserAdd={setUserAdd}
                setUserUpdate={setUserUpdate}
                setDeleteUser={setDeleteUser}
                constants={{ userAdd, userUpdate, deleteUser, isClick, color }}
              />
            )
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
