import Remote1 from "@repo/remote1";
import "./App.css";

function App() {
  return (
    <>
      <div>Running in Host</div>
      <Remote1 defaultCount={1} />
    </>
  );
}

export default App;
