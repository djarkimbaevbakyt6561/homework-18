import { Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Courses from "./components/courses/Courses";
import MaterialDetail from "./components/material/MaterialDetails";
import Materials from "./components/material/Materials";
import Navigation from "./components/navigation/Navigation";
import StudentDetail from "./components/students/StudentDetail";
import Students from "./components/students/Students";
import MainComponent from "./components/UI/MainComponent";
import MaterialMain from "./components/UI/MaterialMain";
function App() {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate(-1);
  }
  const materialHeader = [
    {
      title: 'Submitted',
      url: '/submitted',
    },
    {
      title: 'Waiting',
      url: '/waiting',
    },
    {
      title: 'Late',
      url: '/late',
    },
  ];
  const header = [
    {
      title: 'Materials',
      url: '/materials',
    },
    {
      title: 'Students',
      url: '/students',
    },
    {
      title: 'Ratings',
      url: '/ratings',
    },
  ];
  const params = useParams()
  console.log(params);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route path="courses/" element={<Courses header={header} url="/courses" />}>
              <Route path="materials" element={<Materials />} />
              <Route path="materials/:materialId/details/" element={<MaterialDetail header={materialHeader}/>} >
                <Route path="submitted" element={<MaterialMain title="Submitted Page"/>} />
                <Route path="waiting" element={<MaterialMain title="Waiting Page"/>} />
                <Route path="late" element={<MaterialMain title="Late Page"/>} />
              </Route>
              <Route path="students" element={<Students />} ></Route>
              <Route path="students/:studentId/details" element={<StudentDetail />} />
              <Route path="ratings" element={<MainComponent buttonState={false} title="Ratings Page" />} />
            </Route>
            <Route path="anouncements" element={<MainComponent buttonState={true} title="Anouncements Page" goBackHandler={goBackHandler} />} />
            <Route path="notifications" element={<MainComponent buttonState={true} title="Notifications Page" goBackHandler={goBackHandler} />} />
            <Route path="shedule" element={<MainComponent buttonState={true} title="Shedule Page" goBackHandler={goBackHandler} />} />
            <Route path="*" element={<div style={{ marginTop: "40px", fontSize: "30px" }}>Not Found This Path!</div>} />
          </Route>
        </Routes>
      </div>
      <Outlet />
    </>
  );
}

export default App;