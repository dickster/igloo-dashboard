import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import TablePreview from "@/pages/TablePreview.vue";
import JobRuns from "@/pages/JobRuns.vue";
import JobResults from "@/pages/JobResults.vue";
import Typography from "@/pages/Typography.vue";
import JobConfigurations from "@/pages/JobConfigurations.vue";
import JobConfiguration from "@/pages/JobConfiguration.vue";
import ILSTables from "@/pages/ILSTables.vue";
import CatData from "@/pages/CatData.vue";
import ExcelData from "@/pages/ExcelData.vue";
import RiskMeasures from "@/pages/RiskMeasures.vue";
import HistoricalLosses from "@/pages/ExcelData.vue";
import Contracts from "@/pages/Contracts.vue";
import ILS_Tables from "@/pages/ILS_Tables.vue";
import DbData from "@/pages/DbData.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";


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
                path: "/data/cat",
                name: "Cat Data",
                component: CatData
            },
            {
                path: "/data/excel",
                name: "Excel Data",
                component: ExcelData
            },
            {
                path: "/data/db",
                name: "Database ",
                component: DbData
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
                path: "ils",
                name: "ILS",
                component: ILSTables
            },
            {
                path: "configurations",
                name: "Job Configurations",
                component: JobConfigurations,
                props:true
            },
            {
                path: "configuration",
                name: "Job Configuration",
                component: JobConfiguration,
                props:true
            },
            {
                path: "results",
                name: "Job Results",
                component: JobResults,
                props: true
            },
            {
                path: "config/contract",
                name: "Contracts",
                component: JobResults,
                props: true
            },
            {
                path: "config/tables",
                name: "ILS Tables",
                component: ILS_Tables,
                props: true
            },
            {
                path: "config/losses",
                name: "Historical Losses",
                component: HistoricalLosses,
                props: true
            },
            {
                path: "config/risks",
                name: "Risk Measures",
                component: RiskMeasures,
                props: true
            },
            {
                path: "tableview",
                name: "Table Preview",
                component: TablePreview,
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
                path: "favourites",
                name: "Favourites",
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

        ]
    }
];

export default routes;
