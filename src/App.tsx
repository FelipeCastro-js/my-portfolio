import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleComplete = () => setIsLoaded(true);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={handleComplete} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
