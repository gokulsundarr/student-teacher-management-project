
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudents from './Components/Addstudents';
import AddTeachers from './Components/Addteachers';
import EditStudents from './Components/Editstudents';
import EditTeachers from './Components/Editteachers';
import DashBoard from './page/Dashboard';
import InterviewNotes from './page/Interviewnotes';
import Nopage from './page/Nopage';
import Profile from './page/Profile';
import StudentList from './page/Studentslist';
import TeachersList from './page/Teacherslist';
import 'bootstrap/dist/css/bootstrap.css';
import AppProvider from './context/AppProvider'

function App() {
  return (
    <div className="App">
        <AppProvider>
       <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/addStudents" element={<AddStudents />} />
        <Route path="/editStudents/:id" element={<EditStudents />} />
        <Route path="/addTeachers" element={<AddTeachers />} />
        <Route path="/editTeachers/:id" element={<EditTeachers />} />
        <Route path="/students/all" element={<StudentList />} />
        <Route path="/teachers/all" element={<TeachersList />} />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    

      </AppProvider>
    </div>
  );
}

export default App;
