import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBell,
  faBolt,
  faBookmark,
  faBuilding,
  faBullhorn,
  faChartColumn,
  faChevronDown,
  faCloudArrowUp,
  faCogs,
  faEarthEurope,
  faEllipsisV,
  faEnvelope,
  faFile,
  faFileAlt,
  faFileArchive,
  faHome,
  faPaintBrush,
  faPlus,
  faPowerOff,
  faSearch,
  faStar,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faEllipsisV,
  faTree,
  faBuilding,
  faBookmark,
  faEnvelope,
  faHome,
  faPowerOff,
  faCogs,
  faChartColumn,
  faEarthEurope,
  faCloudArrowUp,
  faBolt,
  faBullhorn,
  faBell,
  faStar,
  faPaintBrush,
  faChevronDown,
  faFile,
  faSearch,
  faPlus,
  faFileAlt,
  faFileArchive
);

export { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText, faEllipsisV };

/**
 *  Ejemplo de utilización en un archivo .vue
 *   <FontAwesomeIcon icon="coffee" />
 */
