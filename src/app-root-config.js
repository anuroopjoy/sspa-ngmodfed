import { registerApplication, start } from "single-spa";

registerApplication({
  name: "angular1",
  app: () => import("ngmfe1/MFEModule1"),
  activeWhen: ["#/angular1", () => ["#/", ""].includes(location.hash)],
});
registerApplication({
  name: "angular2",
  app: () => import("ngmfe2/MFEModule2"),
  activeWhen: "#/angular2",
});

start({
  urlRerouteOnly: true,
});
