import {GUARANTEE_ROUTE, HOME_ROUTE, MEETING_ROUTE} from "./utils/util";
import Home from "./pages/Home";
import Guarantee from "./pages/Guarantee";
import Meeting from "./pages/Meeting";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: GUARANTEE_ROUTE,
        Component: Guarantee
    },
    {
        path: MEETING_ROUTE,
        Component: Meeting
    }
]