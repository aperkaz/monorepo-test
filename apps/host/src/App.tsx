import "./App.css";
import React from "react";

const Remote1 = React.lazy(() => import("@repo/Remote1"));
const Remote2 = React.lazy(() => import("@repo/Remote2"));
const Remote3 = React.lazy(() => import("@repo/Remote3"));
const Remote4 = React.lazy(() => import("@repo/Remote4"));
const Remote5 = React.lazy(() => import("@repo/Remote5"));
const Remote6 = React.lazy(() => import("@repo/Remote6"));
const Remote7 = React.lazy(() => import("@repo/Remote7"));
const Remote8 = React.lazy(() => import("@repo/Remote8"));
const Remote9 = React.lazy(() => import("@repo/Remote9"));
const Remote10 = React.lazy(() => import("@repo/Remote10"));

function App() {
  return (
    <>
      <div>Running in Host</div>
      <Remote1 defaultCount={1} />
      <Remote2 defaultCount={2} />
      <Remote3 defaultCount={3} />
      <Remote4 defaultCount={4} />
      <Remote5 defaultCount={5} />
      <Remote6 defaultCount={6} />
      <Remote7 defaultCount={7} />
      <Remote8 defaultCount={8} />
      <Remote9 defaultCount={9} />
      <Remote10 defaultCount={10} />
    </>
  );
}

export default App;
