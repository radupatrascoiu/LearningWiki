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
import Tests from './pages/Tests';
import Test from './pages/Test';
import Videoclipuri from './pages/Videoclipuri';
import { withHooksKC } from './utils/withHooksKC';
import ReportAMistake from './pages/ReportAMistake';
import ChapterContent from './pages/ChapterContent';
import EditChapterContent from './pages/EditChapterContent';
import ReportAMistakeForm from './pages/ReportAMistakeForm';
import ReportedMistakes from './pages/ReportedMistakes';
import VideoPage from './pages/VideoPage';

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
            <Route exact path='/courses/:courseName/teste/:testId' element={<Test />} />
            <Route exact path='/courses/:courseName/teste' element={<Tests />} />
            <Route exact path='/courses/:courseName/videoclipuri' element={<Videoclipuri />} />
            <Route exact path='/courses/:courseName/videoclipuri/:videoId' element={<VideoPage />} />
            <Route exact path='/cautaMentor' element={<CautaMentor />} />
            <Route exact path='/chat' element={<Chat />} />
            <Route exact path='/raporteazaOGreseala' element={<ReportAMistake />} />
            <Route exact path='/raporteazaOGresealaFormular' element={<ReportAMistakeForm />} />
            <Route exact path='/greseliRaportate' element={<ReportedMistakes />} />
            <Route exact path='/courses/:courseName/materiale/:chapterId/view' element={<ChapterContent />} />
            <Route exact path='/courses/:courseName/materiale/:chapterId/edit' element={<EditChapterContent />} />
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
