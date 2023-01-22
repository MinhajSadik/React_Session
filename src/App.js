import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './Components/Shared/Loader';

import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';
// import Quizzes from './pages/Quizzes';

const Quizzes = React.lazy(() => import('./pages/Quizzes'))
const QuizDetails = React.lazy(() => import('./Components/Quiz/QuizDetails'))
const PlayQuiz = React.lazy(() => import('./Components/Quiz/PlayQuiz'))


function App() {
  const user = sessionStorage.getItem("user")
  const userInfo = JSON.parse(user)
  const [loggedInUser, setLoggedInUser] = useState(false)

  useEffect(() => {
    if (userInfo) {
      setLoggedInUser(true)
    }
  }, [userInfo])

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<QuizDetails />} />
          <Route path='/play/quiz' element={<PlayQuiz />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}





export default App;
