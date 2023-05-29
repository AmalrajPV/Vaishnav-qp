import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";

export const Sidebar = [
    {
        title: 'Exam',
        path: '/exam',
        icons: <BsIcons.BsFillPencilFill />,
        cName: 'nav-text'
    },
    {
        title: 'View Notification',
        path: '/viewnotification',
        icons: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Report Issue',
        path: '/reportissue',
        icons: <AiIcons.AiOutlineIssuesClose />,
        cName: 'nav-text'
    },
    {
        title: 'PYQ',
        path: '/pyq',
        icons: <ImIcons.ImBooks />,
        cName: 'nav-text'
    }


]

export const sidebar = (user) =>{
    switch (user) {
        case 'head of department':
            return [
                {
                    title: 'Exam',
                    path: '/exam',
                    icons: <BsIcons.BsFillPencilFill />,
                    cName: 'nav-text'
                },
                // {
                //     title: 'View Notification',
                //     path: '/viewnotification',
                //     icons: <IoIcons.IoIosPaper />,
                //     cName: 'nav-text'
                // },
                {
                    title: 'Report Issue',
                    path: '/reportissue',
                    icons: <AiIcons.AiOutlineIssuesClose />,
                    cName: 'nav-text'
                },
                {
                    title: 'PYQ',
                    path: '/pyq',
                    icons: <ImIcons.ImBooks />,
                    cName: 'nav-text'
                }


            ]
        case "exam controller":
            return [
                {
                    title: 'View calander',
                    path: '/viewcalander',
                    icons: <AiIcons.AiOutlineCalendar />,
                    cName: 'nav-text'
                },
                {
                    title: 'View question paper',
                    path: '/viewquestionpaper',
                    icons: <IoIcons.IoIosPaper />,
                    cName: 'nav-text'
                },
                {
                    title: 'View issue',
                    path: '/viewissue',
                    icons: <AiIcons.AiOutlineIssuesClose />,
                    cName: 'nav-text'
                },
            ]
            case 'level officer':
            return [
                {
                    title: 'Add Exam',
                    path: '/addexam',
                    icons: <IoIcons.IoMdAddCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Add Course',
                    path: '/addcourse',
                    icons: <IoIcons.IoMdAddCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Add hod',
                    path: '/addhod',
                    icons: <IoIcons.IoMdAddCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Add faculty',
                    path: '/addfaculty',
                    icons: <IoIcons.IoMdAddCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'View calander',
                    path: '/viewcalander',
                    icons: <AiIcons.AiOutlineCalendar />,
                    cName: 'nav-text'
                },
                {
                    title: 'View issue',
                    path: '/viewissue',
                    icons: <AiIcons.AiOutlineIssuesClose />,
                    cName: 'nav-text'
                }
            ]
            case "faculty":
            return [
                {
                    title: 'View calander',
                    path: '/viewcalander',
                    icons: <AiIcons.AiOutlineCalendar />,
                    cName: 'nav-text'
                }
            ]
        default:
            return []
    }
}