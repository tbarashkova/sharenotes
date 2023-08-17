import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <Header />
          <div className="container">

            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
              <Route exact path="/note/" element={<Note />} />
              <Route path="/note/:noteURL" element={<Note />} />
              <Route path="*" element={<Error />} />
            </Routes>

          </div>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
