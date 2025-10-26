import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import some icons
import {
  faBars,
  faHome,
  faGlobe,
  faHotel,
  faMoneyBillWave,
  faBell,
  faClock,
  faComments,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faExclamationTriangle,
  faShieldAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFire,
  faAmbulance,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faStar,
  faHome,
  faGlobe,
  faHotel,
  faMoneyBillWave,
  faBell,
  faSearch,
  faExclamationTriangle,
  faUser,
  faClock,
  faArrowRight,
  faShieldAlt,
  faFire,
  faAmbulance,
  faPhone,
  faFilter,
  faGithub,
  faComments
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).mount("#app");
