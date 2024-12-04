import './App.css';
import Profile from './components/Profile/Profile.jsx';
import ProjectsAndTasks from './components/ProjectsAndTasks/ProjectsAndTasks.jsx';

function App() {
  return (
    <div className='space'>
     <ProjectsAndTasks/>
     <Profile/>
    </div>
  );
}

export default App;
