import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './Components/Shared/Loader';

import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';
import useAuth from './Hooks/useAuth';
import PrivateRoute from './routes/PrivateRoute';
// import Quizzes from './pages/Quizzes';

const Quizzes = React.lazy(() => import('./pages/Quizzes'))
const QuizDetails = React.lazy(() => import('./Components/Quiz/QuizDetails'))
const PlayQuiz = React.lazy(() => import('./Components/Quiz/PlayQuiz'))
const QuizResult = React.lazy(() => import('./Components/Quiz/QuizResult'))

function App() {
  const loggedInUser = useAuth(false)

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<QuizDetails />} />
          <Route path='/play/quiz' element={<PlayQuiz />} />
          <Route path='/quiz/result' element={<PrivateRoute>
            <QuizResult />
          </PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}





export default App;
