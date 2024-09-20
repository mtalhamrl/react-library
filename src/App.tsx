import "./App.css";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarandFooter/Footer";
import { Navbar } from "./layouts/NavbarandFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/*     <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  );
};
