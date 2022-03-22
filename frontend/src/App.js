import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Courses from './components/courses';
import NotFound from './components/notfound';
import CautaMentor from './components/cautaMentor';
import Course from './components/course';
import FooterComponent from './components/footer';
import Chat from './components/chat';
import Materiale from './components/Materiale';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/courses/matematica' element={<Course/>} />
          <Route exact path='/courses/matematica/materiale' element={<Materiale/>} />
          <Route exact path='/cautaMentor' element={<CautaMentor/>} />
          <Route exact path='/chat' element={<Chat/>} />
          <Route path='*' element={<NotFound />}></Route>
          {/* <Route exact path="/course/:courseID" component={Course} />
          <Route exact path="/course/:courseID/edit" component={CourseEdit} />
          <Route path="/course/:courseID/presencelist/:presenceListID" component={presenceList} />
          <Route path="/statistics/:courseID/:courseNo" component={Statistics} />
          <Route path="/validate/:courseID/:presenceListID/:qrcodeID" component={ValidateQR} />
          <Route path="/secured" component={Student} />
          
          <Route exact path="/create/course" component={CourseOptions} />
          <Route path="*"><NotFound /></Route> */}
        </Routes>
      </div>
      {/* <FooterComponent></FooterComponent> */}
    </BrowserRouter>
  </div>
  );
}

export default App;
