import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import JobRuns from "@/pages/JobRuns.vue";
import JobResults from "@/pages/JobResults.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "Home",
                component: Dashboard
            },
            {
                path: "jobruns",
                name: "Job Runs",
                component: JobRuns
            },
            {
                path: "user ",
                name: "User Profile",
                component: UserProfile
            },
            {
                path: "table",
                name: "Tables",
                component: TableList
            },
            {
                path: "results",
                name: "Job Results",
                component: JobResults,
                props: true
            },
            {
                path: "typography",
                name: "Job Configurations",
                component: Typography
            },
            {
                path: "icons",
                name: "Job Runs",
                component: Icons
            },
            {
                path: "maps",
                name: "Maps",
                meta: {
                    hideFooter: true
                },
                component: Maps
            },
            {
                path: "notifications",
                name: "Notifications",
                component: Notifications
            },
            {
                path: "upgrade",
                name: "Upgrade to PRO",
                component: UpgradeToPRO
            }
        ]
    }
];

export default routes;
