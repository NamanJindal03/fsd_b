import React from 'react'
import {FaPen, FaRegCircle, FaTimes} from "react-icons/fa"

export default function Icon({player}) {
    switch (player){
        case "empty":
            return <FaPen />
        case "cross":
            return <FaTimes />
        case "circle":
            return <FaRegCircle />
    }
}
