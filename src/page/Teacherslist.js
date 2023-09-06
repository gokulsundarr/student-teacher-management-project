
import Navsidebar from "../Components/Navsidebar";
import TcrumBar from "../Components/Tcrumbar";
import TeacherCard from "../Components/Teachercard";


import { Appstate } from "../context/AppProvider";

export default function TeachersList() {
  const { teacherData } = Appstate();

  return (
    <Navsidebar>
      <div>
        <div>
          <TcrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {teacherData.map((teach, ind) => (
            <TeacherCard teacher={teach} key={teach.id} />
          ))}
        </div>
      </div>
    </Navsidebar>
  );
}