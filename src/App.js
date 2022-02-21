import { Routes, Route } from 'react-router-dom';
import BookSection from './components/BookSection';
import Categories from './components/Categories';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <BookSection />
              <Form />
            </>
          }
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
