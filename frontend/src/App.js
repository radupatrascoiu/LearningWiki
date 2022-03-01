import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Courses from './components/courses';
import NotFound from './components/notfound';
import CautaMentor from './components/cautaMentor';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/cautaMentor' element={<CautaMentor/>} />
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
    </BrowserRouter>
  </div>
  );
}

export default App;
