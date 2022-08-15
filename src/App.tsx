import { BrowserRouter } from "react-router-dom";
import RoutesMounter from "routes/RoutesMounter";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesMounter />
    </BrowserRouter>
  );
};

export default App;
