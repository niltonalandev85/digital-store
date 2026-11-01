import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";
import Layout from "./pages/Layout/Layout";

function UnavailablePage() {
  return (
    <Layout>
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h1>Página não disponível</h1>

        <p>
          Esta página não faz parte dos requisitos desta versão do projeto
          Digital Store.
        </p>

        <Link to="/">Voltar para a Home</Link>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />

        <Route path="*" element={<UnavailablePage />} />
      </Routes>
    </BrowserRouter>
  );
}
