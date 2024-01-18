import { createSignal, lazy } from "solid-js";

// import Album from "./components/Album.tsx";

const Album = lazy(() => import("./components/Album.tsx"));

const [name, _] = createSignal("chaitanya");

function App() {
  return (
    <>
      <h1>Hello {name()} Below is Your Album</h1>
      <Album />
    </>
  );
}

export default App;
