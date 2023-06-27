import Home from "./Layout/Home";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import { useAtom } from "jotai";
import { loginAtom } from "./Atoms";
import Gpt from "./Layout/Gpt";
function App() {
  const [isLogged] = useAtom(loginAtom);

  return (
    <Flex
      bg="radial-gradient(circle, #470e59, #253667)"
      direction="column"
      minHeight="100vh"
      fontFamily={"Rubik, sans-serif"}
    >
      <Router>
        <Routes>
          <Route path="/" element={isLogged ? <Dashboard /> : <Home />} />
          <Route path="/:card" element={<Gpt />} />
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
