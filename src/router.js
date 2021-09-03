import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial")
  },
  {
    path: "/excel",
    name: "excel-downloads",
    component: () => import("./components/ExcelDownload")
  },
  {
    path: "/datatable",
    name: "datatable",
    component: () => import("./components/DataTableTutorial")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;