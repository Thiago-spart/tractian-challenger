import { appWithTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "react-toastify/dist/ReactToastify.css";

import { MyApp } from "web/pages/App";

export default appWithTranslation(MyApp);
