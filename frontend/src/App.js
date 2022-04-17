import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/up&down/Navbar';
import Courses from './pages/Courses';
import NotFound from './pages/Notfound';
import CautaMentor from './pages/CautaMentor';
import Course from './pages/Course';
import FooterComponent from './components/up&down/Footer';
import Chat from './pages/Chat';
import Materiale from './pages/Materiale';
import Teste from './pages/Teste';
import Videoclipuri from './pages/Videoclipuri';
import Video from './pages/Video';
import { withHooksKC } from './utils/withHooksKC';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/courses' element={<Courses />} />
            <Route exact path='/courses/:courseName' element={<Course />} />
            <Route exact path='/courses/:courseName/materiale' element={<Materiale />} />
            <Route exact path='/courses/:courseName/teste' element={<Teste />} />
            <Route exact path='/courses/:courseName/videoclipuri' element={<Videoclipuri />} />
            <Route exact path='/courses/:courseName/videoclipuri/:videoId' element={<Video />} />
            <Route exact path='/cautaMentor' element={<CautaMentor />} />
            <Route exact path='/chat' element={<Chat />} />
            <Route path='*' element={<NotFound />}></Route>

            {/* <Route path="/secured" component={Student} /> */}

          </Routes>
        </div>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </div>
  );
}

export default withHooksKC(App);
