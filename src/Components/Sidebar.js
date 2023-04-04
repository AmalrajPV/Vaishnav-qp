import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";


export const Sidebar = [
    {
        title: 'Exam',
        path: '/',
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
        case 'hod':
            return [
                {
                    title: 'Exam',
                    path: '/',
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
        case "ec":
            return [
                {
                    title: 'View calander',
                    path: '/viewcalander',
                    icons: <BsIcons.BsFillPencilFill />,
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
                    icons: <IoIcons.IoIosPaper />,
                    cName: 'nav-text'
                },
            ]
        default:
            return []
    }
}