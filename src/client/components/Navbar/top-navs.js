import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faAlignLeft, faUsers, faChartArea } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const topNavs = [
    {
        label: 'Главная',
        path: '/home',
        icon: <FontAwesomeIcon icon={faHome}/>,
    },
    {
        label: 'Методологии',
        path: '/methodologies',
        icon: <FontAwesomeIcon icon={faChartArea}/>,
    },
    {
        label: 'Блог',
        path: '/blog',
        icon: <FontAwesomeIcon icon={faAlignLeft}/>,
    },
    {
        label: 'Команда',
        path: '/partners',
        icon: <FontAwesomeIcon icon={faUsers}/>,
    },
    {
        label: 'О проекте',
        path: '/about',
        icon: <FontAwesomeIcon icon={faInfoCircle}/>,
    },
]
