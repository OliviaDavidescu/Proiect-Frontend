import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const sideBarData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <EventIcon/>,
        text: "Events",
        link: "events"
    },
    {
        id: 2,
        icon: <HowToRegIcon/>,
        text: "Sign Up",
        link: "signup"
    },
    {
        id: 3,
        icon: <AccountCircleIcon/>,
        text: "Sign In",
        link: "signin"
    },
]