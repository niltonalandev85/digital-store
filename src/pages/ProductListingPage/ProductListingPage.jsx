import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";

import "./ProductListingPage.css";

const categoryOptions = [
  { text: "Tênis Esportivo", value: "Esportivo" },
  { text: "Tênis Casual", value: "Casual" },
];

const priceOptions = [
  { text: "Todos os preços", value: "todos" },
  { text: "Até R$ 200", value: "ate200" },
  { text: "R$ 200 a R$ 300", value: "200a300" },
  { text: "Acima de R$ 300", value: "acima300" },
];

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();

  const [sortOrder, setSortOrder] = useState("");
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState("todos");

  const search = (searchParams.get("filter") || "")
    .trim()
    .toLocaleLowerCase("pt-BR");

  function handleCategoryChange(value, checked) {
    setCategories((previous) =>
      checked
        ? [...previous, value]
        : previous.filter((item) => item !== value),
    );
  }

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const name = product.name.toLocaleLowerCase("pt-BR");
      const finalPrice = product.priceDiscount ?? product.price;

      // Filtro da pesquisa
      const matchesSearch = name.includes(search);

      // Filtro de categorias
      const matchesCategory =
        categories.length === 0 ||
        categories.some((category) => product.name.includes(category));

      // Filtro de preços
      let matchesPrice = true;

      if (priceRange === "ate200") {
        matchesPrice = finalPrice <= 200;
      } else if (priceRange === "200a300") {
        matchesPrice = finalPrice > 200 && finalPrice <= 300;
      } else if (priceRange === "acima300") {
        matchesPrice = finalPrice > 300;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Ordenação pelo preço efetivo
    if (sortOrder === "menor") {
      result.sort(
        (a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price),
      );
    }

    if (sortOrder === "maior") {
      result.sort(
        (a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price),
      );
    }

    return result;
  }, [search, sortOrder, categories, priceRange]);

  return (
    <Layout>
      <div className="catalog-page">
        <aside className="catalog-sidebar">
          <div className="sort-field">
            <label htmlFor="sort-products">Ordenar por</label>

            <select
              id="sort-products"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="">Selecione</option>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>

          <div className="filter-panel">
            <h2>Filtrar por</h2>
            <hr />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categoryOptions}
              selectedValues={categories}
              onChange={handleCategoryChange}
            />

            <FilterGroup
              title="Preço"
              inputType="radio"
              name="price"
              options={priceOptions}
              selectedValues={[priceRange]}
              onChange={(value) => setPriceRange(value)}
            />
          </div>
        </aside>

        <div className="catalog-results">
          <Section
            title={`${filteredProducts.length} produtos encontrados`}
            titleAlign="left"
          >
            {filteredProducts.length > 0 ? (
              <ProductListing products={filteredProducts} />
            ) : (
              <p className="empty-results">Nenhum produto encontrado.</p>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  );
}
