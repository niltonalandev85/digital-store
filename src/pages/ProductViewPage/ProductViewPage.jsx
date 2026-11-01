import { Link, useParams } from "react-router-dom";

import Layout from "../Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";

import { products } from "../../data/products";
import "./ProductViewPage.css";

const productImages = [
  { src: "/produc-image-1.jpeg" },
  { src: "/produc-image-2.jpeg" },
  { src: "/produc-image-3.jpeg" },
  { src: "/produc-image-4.jpeg" },
  { src: "/produc-image-5.jpeg" },
];

const sizes = ["39", "40", "41", "42", "43"];

const colors = ["#000000", "#C92071", "#B5B6F2", "#FFFFFF"];

export default function ProductViewPage() {
  const { id } = useParams();

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <Layout>
        <div className="product-not-found">
          <h1>Produto não encontrado</h1>
          <Link to="/produtos">Voltar aos produtos</Link>
        </div>
      </Layout>
    );
  }

  const recommendedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="product-view-page">
        <div className="product-view-main">
          {/* Galeria de imagens */}
          <div className="product-view-gallery">
            <Gallery
              images={productImages}
              width={700}
              height={570}
              radius="4px"
              showThumbs
            />
          </div>

          {/* Informações do produto */}
          <BuyBox
            name={product.name}
            reference={`SKU-${product.id}`}
            stars={4.7}
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Tênis confortável e moderno, desenvolvido para oferecer estilo e praticidade no dia a dia."
          >
            {/* Opções de tamanho */}
            <div className="product-variation">
              <h3>Tamanho</h3>

              <ProductOptions
                options={sizes}
                radius="4px"
                shape="square"
                type="text"
              />
            </div>

            {/* Opções de cor */}
            <div className="product-variation">
              <h3>Cor</h3>

              <ProductOptions options={colors} shape="circle" type="color" />
            </div>
          </BuyBox>
        </div>

        {/* Produtos recomendados */}
        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{
            text: "Ver todos",
            href: "/products",
          }}
        >
          <ProductListing products={recommendedProducts} />
        </Section>
      </div>
    </Layout>
  );
}
