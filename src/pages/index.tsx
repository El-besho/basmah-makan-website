import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Basmah Makan | Premium Decoration & Furniture</title>
        <meta name="description" content="Modern decoration solutions for your home. Premium quality SPC flooring, parquet, and furniture." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main>
        <section className="hero">
          <h1>Basmah Makan</h1>
          <p>Premium Home Decoration & Furniture Solutions</p>
          <button className="cta-button">Explore Services</button>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>SPC Flooring</h3>
              <p>Water-resistant and durable flooring solutions</p>
            </div>
            <div className="service-card">
              <h3>Parquet</h3>
              <p>Premium wooden flooring options</p>
            </div>
            <div className="service-card">
              <h3>Furniture</h3>
              <p>Modern cabinets and shelving systems</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
