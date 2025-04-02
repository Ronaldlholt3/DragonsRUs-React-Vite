// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <>
      {/* HEADER */}
      <header className="header" data-header>
        <div className="container">
          <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true" className="menu-icon"></ion-icon>
            <ion-icon name="close-outline" aria-label="true" className="close-icon"></ion-icon>
          </button>
          <a href="#" className="logo">
            DragonsRUsðŸ‰
          </a>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home 
                </a>
              </li>
              <li className="navbar-item">
                <a href="#shop" className="navbar-link" data-nav-link>
                  Dragon Buddies 
                </a>
              </li>
              <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link=""> </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Potion Shop 
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Contact ðŸ“¨
                </a>
              </li>
            </ul>
            <a href="#" className="navbar-action-btn">
              Log In
            </a>
          </nav>
          <div className="header-actions">
            <button className="action-btn" aria-label="Search">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>
            <button className="action-btn user" aria-label="User">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>
            <button className="action-btn" aria-label="cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
              <span className="btn-badge">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <article>
          {/* HERO */}
          <section
            className="section hero has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: 'url("/assets/landingpage4-min.jpg")' }}
          >
            <div className="container">
              <h1 className="h1 hero-title">
                <span className="span">High Grade</span> Dragon lore
              </h1>
              <p className="hero-text">guild sign up 40% off today</p>
              <a href="#" className="btn">
                explore wears
              </a>
            </div>
          </section>

          {/* CATEGORY */}
          <section className="section category" aria-label="category">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Popular</span> categories
              </h2>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ '--width': '330px', '--height': '300px' }}
                    >
                      <img
                        src="/assets/oreoDragon.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Baby Dragon Food"
                        className="img-cover"
                      />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Baby Dragon Food
                      </a>
                    </h3>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ '--width': '330px', '--height': '300px' }}
                    >
                      <img
                        src="/assets/adultdragonfood2.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Adult Dragon Food"
                        className="img-cover"
                      />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Adult Dragon Food
                      </a>
                    </h3>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ '--width': '330px', '--height': '300px' }}
                    >
                      <img
                        src="/assets/armory.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Armory"
                        className="img-cover"
                      />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Armory
                      </a>
                    </h3>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ '--width': '330px', '--height': '300px' }}
                    >
                      <img
                        src="/assets/dragonwtoy.jpeg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Dragon Toys"
                        className="img-cover"
                      />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Dragon Toys
                      </a>
                    </h3>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ '--width': '330px', '--height': '300px' }}
                    >
                      <img
                        src="/assets/dragoninclothes.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Dragon Accesssories"
                        className="img-cover"
                      />
                    </figure>
                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Dragon Accesssories
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* OFFERS */}
          <section className="section offer" aria-label="offer">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: 'url("/assets/treasure2.jpg")',
                      '--width': '540px',
                      '--height': '374px',
                    }}
                  >
                    <p className="card-subtitle">Collected Items. At Guild Only</p>
                    <h3 className="h3 card-title">
                      Fresh out the dungeon <span className="span">Deals</span>
                    </h3>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: 'url("/assets/potion.jpg")',
                      '--width': '540px',
                      '--height': '374px',
                    }}
                  >
                    <p className="card-subtitle">Treats & Potions</p>
                    <h3 className="h3 card-title">
                      Treat your dragon with <span className="span">love</span>
                    </h3>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: 'url("/assets/magic staff.jpg")',
                      '--width': '540px',
                      '--height': '374px',
                    }}
                  >
                    <p className="card-subtitle">High Quality Equipment</p>
                    <h3 className="h3 card-title">
                      Crafted by the best <span className="span">smiths</span>
                    </h3>
                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* PRODUCT */}
          <section className="section product" id="shop" aria-label="product">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Dragon</span> Buddies
              </h2>
              {/* ... (rest of the product section) ... */}
            </div>
          </section>

          {/* SERVICE */}
          <section className="section service" aria-label="service">
            <div className="container">
              {/* ... (rest of the service section) ... */}
            </div>
          </section>

          {/* CTA */}
          <section
            className="cta has-bg-image"
            aria-label="cta"
            style={{ backgroundImage: 'url("/assets/images/cta-bg.jpg")' }}
          >
            <div className="container">
              {/* ... (rest of the CTA section) ... */}
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <footer
        className="footer"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg")',
        }}
      >
        <div className="footer-top section">
          <div className="container">
            {/* ... (rest of the footer section) ... */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
             {/* ... (rest of the footer bottom section) ... */}
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  );
}

export default HomePage;