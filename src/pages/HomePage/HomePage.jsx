import Layout from "../Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import "./HomePage.css";
import { Link } from "react-router-dom";

const slideImages = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
  { src: "/home-slide-4.jpeg" },
  { src: "/home-slide-5.jpeg" },
  { src: "/home-slide-6.jpeg" },
  { src: "/home-slide-7.jpeg" },
  { src: "/home-slide-8.jpeg" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Galeria principal */}

<div className="home-hero">
  <Gallery
    className="home-gallery"
    images={slideImages}
    width={1440}
    height={681}
  />

  <div className="home-hero-content">
    <span className="home-hero-subtitle">
      Melhores ofertas personalizadas
    </span>

    <h1>Queima de estoque Nike</h1>

    <p>
      Consequat culpa exercitation mollit nisi excepteur
      do do tempor laboris eiusmod irure consectetur.
    </p>

    <Link to="/produtos" className="home-hero-button">
      Ver Ofertas
    </Link>
  </div>
</div>


      {/* Coleções em destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="featured-collections">
          <img src="/collection-1.png" alt="Coleção em destaque 1" />

          <img src="/collection-2.png" alt="Coleção em destaque 2" />

          <img src="/collection-3.png" alt="Coleção em destaque 3" />
        </div>
      </Section>

      {/* Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
}
