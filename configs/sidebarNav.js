// sidebar list
import { AiOutlineIdcard, AiOutlinePicture, AiOutlinePlusSquare, AiOutlineSmile } from "react-icons/ai";

const sidebarNav = [
    {
        link:'/',
        icon: <AiOutlineIdcard/>,
        text:'About SY'
    },
    {
        link:'/portfolio',
        icon: <AiOutlinePicture/>,
        text:'SY Portfolio'
    },
    {
        link:'/mini',
        icon: <AiOutlinePlusSquare/>,
        text:'SY Mini Project'
    },
    {
        link:'/contact',
        icon: <AiOutlineSmile/>,
        text:'Contact me'
    },
]

export default sidebarNav