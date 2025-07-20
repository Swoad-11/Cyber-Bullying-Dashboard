import { createBrowserRouter } from "react-router";
import Overview from "../pages/Overview/Overview";
import Dashboard from "../layout/Dashboard";
import FemaleCandidates from "../pages/FemaleCandidates/FemaleCandidates";
import ViolenceReports from "../pages/ViolenceReports/ViolenceReports";
import PartyAnalytics from "../pages/PartyAnalytics/PartyAnalytics";
import ActionsTaken from "../pages/ActionsTaken/ActionsTaken";
import DivisionOverview from "../pages/DivisionOverview/DivisionOverview";

const routes = [
  {
    path: "/",
    Component: Dashboard,
    children: [
      { index: true, path: "/", Component: Overview },
      { path: "/female-candidates", Component: FemaleCandidates },
      { path: "/division-overview", Component: DivisionOverview },
      {
        path: "/violence-reports",
        Component: ViolenceReports,
      },
      { path: "/party-analytics", Component: PartyAnalytics },
      { path: "/actions-taken", Component: ActionsTaken },
    ],
  },
];

export const router = createBrowserRouter(routes);
