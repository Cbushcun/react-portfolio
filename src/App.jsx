import Index from "./pages/IndexPage/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { LoadingProvider } from "./components/useContext/LoadingProvider";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LoadingProvider>
  );
}

export default App;
