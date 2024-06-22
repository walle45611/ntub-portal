import { lazy } from "react";

const REMOTE_APP = [
    lazy(() => import("remoteA/App")),
    // lazy(() => import('remoteB/App'))
];
const APP_INFO = [
    { id: 0, name: "服務學習", description: "Description for App 1" },
    { id: 1, name: "remoteB", description: "Description for App 2" },
];

export { REMOTE_APP, APP_INFO }