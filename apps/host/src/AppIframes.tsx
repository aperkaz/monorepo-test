import React from "react";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Iframe = (props: any) => {
  const [load, setLoad] = React.useState(false);
  return (
    <iframe
      {...props}
      height={"200px"}
      width={"200px"}
      frameBorder="0"
      loading="lazy"
      style={load ? undefined : { visibility: "hidden" }}
      onLoad={() => setLoad(true)}
    ></iframe>
  );
};

function App() {
  return (
    <>
      <div>Running in Host</div>
      <Iframe src="http://localhost:5173" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5174" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5175" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5176" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5177" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5178" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5180" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5181" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5182" />
      <div style={{ height: "100vh" }}></div>
      <Iframe src="http://localhost:5183" />
    </>
  );
}

export default App;
