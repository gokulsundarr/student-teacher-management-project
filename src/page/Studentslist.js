import CrumBar from "../Components/CrumBar";
import Navsidebar from "../Components/Navsidebar";


import StudentCard from "../Components/StudentCards";
import { Appstate } from "../context/AppProvider";

export default function StudentList() {
  const { studentData } = Appstate();

  return (
    <Navsidebar>
      <div>
        <div>
          <CrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {studentData.map((stud, ind) => (
            <StudentCard student={stud} key={stud.id} />
          ))}
        </div>
      </div>
    </Navsidebar>
  );
}