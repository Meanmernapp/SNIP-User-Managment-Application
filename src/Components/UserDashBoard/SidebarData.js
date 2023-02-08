import React from "react";
import gauge_solid_l1 from "../../images/Navbar-images/gauge-solid.svg";
import book_solid_l2 from "../../images/Navbar-images/book-solid.svg";
import ic_file_l3 from "../../images/Navbar-images/ic-file-arrow-up-solid.svg";
import ic_file_l4 from "../../images/Navbar-images/ic-file-arrow-down-solid.svg";
import object_ungroup_l5 from "../../images/Navbar-images/object-ungroup-solid.svg";
import magnifying_glass_l6 from "../../images/Navbar-images/magnifying-glass-chart-solid.svg";
import diagram_project_solid_l7 from "../../images/Navbar-images/diagram-project-solid.svg";
import chart_bar_solid_l8 from "../../images/Navbar-images/chart-bar-solid.svg";
import ic_file_l9 from "../../images/Navbar-images/ic-file.svg";
import users_solid_l_1 from "../../images/Navbar-images/users-solid.svg";
import layer_group from "../../images/Navbar-images/layer-group-solid.svg";
import ic_image from "../../images/Navbar-images/ic-image.svg";
import cloud_solid_l_3 from "../../images/Navbar-images/cloud-solid.svg";
import ic_bell_l_4 from "../../images/Navbar-images/ic-bell.svg";
import ic_list_l_5 from "../../images/Navbar-images/ic-list-detail.svg";
import ic_settings_l_6 from "../../images/Navbar-images/ic-settings.svg";

export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: <img className="img-navbar my-auto" src={gauge_solid_l1} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 2,

    title: "Manual",
    path: "/search",
    icon: <img className="img-navbar my-auto" src={book_solid_l2} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 3,

    title: "Extract",
    path: "/users",
    icon: <img className="img-navbar my-auto" src={ic_file_l3} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },

  {
    id: 4,

    title: "Switch",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={ic_file_l4} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 5,

    title: "Case",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={object_ungroup_l5} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 6,
    title: "Analysis",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={magnifying_glass_l6} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 7,

    title: "Correlation",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={diagram_project_solid_l7} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  ,
  {
    id: 8,
    title: "Estadisticas",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={chart_bar_solid_l8} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 9,

    title: "Report",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={ic_file_l9} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 10,

    title: "Users",
    path: "/",
    icon: <img className="img-navbar my-auto" src={users_solid_l_1} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 11,

    title: "Department",
    path: "/departments",
    icon: <img className="img-navbar my-auto" src={layer_group} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 12,

    title: "Images",
    path: "/departments",
    icon: <img className="img-navbar my-auto" src={ic_image} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 13,

    title: "Connections",
    path: "/internetConnection",
    icon: <img className="img-navbar my-auto" src={cloud_solid_l_3} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 14,

    title: "Alerts",
    path: "/alert",
    icon: <img className="img-navbar my-auto" src={ic_bell_l_4} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 15,
    title: "Log",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={ic_list_l_5} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
  {
    id: 16,
    title: "Configuration",
    path: "/team",
    icon: <img className="img-navbar my-auto" src={ic_settings_l_6} />,
    cName: "nav-text",
    cNameSelected: "nav-selected",
  },
];
