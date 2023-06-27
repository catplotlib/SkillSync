import Home from "./Layout/Home";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";

function App() {
  return (
    <Flex
      bg="radial-gradient(circle, #470e59, #253667)"
      direction="column"
      minHeight="100vh"
      fontFamily={"Rubik, sans-serif"}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
