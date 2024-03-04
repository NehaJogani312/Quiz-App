import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import {Container} from "@mui/material"


function App() {
  return (
    <Container max-width="sm" className="App">
    <a href="https://www.gktoday.in/quizbase/indian-geography-mcqs">Indian Geography</a>
      <Box textAlign="center" mt={5} >
        <Router>
          <Routes>
            <Route exact path="/" element={<div><Typography variant="h2" fontWeight="bold"  color="info">Quiz App</Typography><Settings /></div> } />
            <Route exact path="/questions" element={<Questions  />} />
            <Route exact path="/score" element={<FinalScreen />} />
          </Routes>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
