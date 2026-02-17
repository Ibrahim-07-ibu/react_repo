import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div>
      <Hero />

      <section className="products-section">
        <div className="products-grid">

          <ServiceCard title="Fancy Product" price="$40.00 - $80.00" />
          <ServiceCard title="Special Item" price="$18.00" />
          <ServiceCard title="Sale Item" price="$25.00" />
          <ServiceCard title="Popular Item" price="$40.00" />
          <ServiceCard title="Sale Item" price="$25.00" />
          <ServiceCard title="Fancy Product" price="$120.00 - $280.00" />
          <ServiceCard title="Special Item" price="$18.00" />
          <ServiceCard title="Popular Item" price="$40.00" />

        </div>
      </section>
    </div>
  );
}

export default Home;
