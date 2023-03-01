import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import React, { Suspense } from "react";
import { CircularProgressComponent } from "./components/CircularProgress";
// import { Test } from "./Test"
import { Toggle, AdvancedClassComponent } from "./Test";

const HomePage = React.lazy(() =>
  import("./pages/HomePage").then(({ HomePage }) => ({ default: HomePage }))
);

const OneCurrencyStats = React.lazy(() =>
  import("./pages/OneCurrencyStats").then(({ OneCurrencyStats }) => ({
    default: OneCurrencyStats,
  }))
);

export default function App() {
  return (
    <Suspense fallback={<CircularProgressComponent />}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="" element={<HomePage />} />
          <Route path=":id" element={<OneCurrencyStats />} />
        </Route>
        <Route
          path="/test"
          element={
            <>
              <AdvancedClassComponent name="123" age={21} /> <Toggle />{" "}
            </>
          }
        />
      </Routes>
    </Suspense>
  );
}
