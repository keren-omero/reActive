import React from "react"
import {RiRunFill} from "react-icons/ri";
import {RiFolderHistoryFill} from "react-icons/ri";
import {AiOutlineSmile} from "react-icons/ai";
import {AiFillMail} from "react-icons/ai";


export const SidebarData = [
    { title: "start training",
      icon: <RiRunFill />,
      link: "/home"
    },

   { title: "random training",
      icon: <AiOutlineSmile />,
      link: "/random-training"
    },

      { title: "history",
          icon: <RiFolderHistoryFill />,
          link: "/history"
        },

        { title: "contact us",
                icon: <AiFillMail />,
                link: "/contact"
        }
 ]
