import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { SplashScreen } from "../shared/components";
const AppRoutes = lazy(() => import("./routes"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
