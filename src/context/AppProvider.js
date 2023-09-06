import { Component, createContext, useContext, useEffect, useState } from "react"
import { API } from "../Api/api"


const AppCtx = createContext()
function AppProvider({children}) {

  const tdataBase = [
    {
      id: 1,
      tname: "Malligeshwari",
      designation: "Principal",
      qualification: "B.A,M.A,M.phil",
      experience: "23"
    },
    {
      id: 2,
      tname: "Rajendran",
      designation: "Vice.Principal",
      qualification: "B.A,B.Ed,M.Ed",
      experience: "18"
    },
    {
      id: 3,
      tname: "Guna",
      designation: "Staff incharge",
      qualification: "B.E",
      experience: "9"
    }
  ]

  const spages = [
    {
      name: "Student",
      path: "/students/all"
    }
  ]

  const tpages = [
    {
      name: "Teacher",
      path: "/teachers/all"
    }
  ]
  const [crumState, setCrumState] = useState(spages)
  const [tcrumState,setTcrumState] = useState(tpages)

  const [studentData, setStudentData] = useState([])
  const [teacherData,setTeacherData] = useState(tdataBase)

  useEffect(()=>{
    const getAllStudents = async()=>{
      const response = await fetch(API,{
        method:"GET"
      })
      const data = await response.json();
      // console.log(data)
      setStudentData(data)
    }
    getAllStudents()
  },[])

  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setStudentData,
        crumState,
        setCrumState,
        teacherData,
        setTeacherData,
        tcrumState,
        setTcrumState
      }}

    >
      {children}
    </AppCtx.Provider>
  )
}

export const Appstate = ()=>{
  return useContext(AppCtx)
}

export default AppProvider