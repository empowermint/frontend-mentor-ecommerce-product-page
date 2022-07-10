class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="site-logo">
            <a href="#"><img src="images/logo.svg" alt="sneakers logo" /></a>
          </div>
          <nav className="site-navigation">
            <ul className="site-navigation__items">
              <a href="#"><li>Collections</li></a>
              <a href="#"><li>Men</li></a>
              <a href="#"><li>Women</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </nav>
          <nav className="user-menu">
            <ul className="user-menu__items">
              <li><a href="#"><img className="user-menu__cart" alt="shopping cart" src="images/icon-cart.svg" /></a></li>
              <li><a href="#"><img className="user-menu__avatar" alt="user avatar" src="images/image-avatar.png" /></a></li>
            </ul>
          </nav>
        </header>
        <main>
          <ProductCarousel />
          <div className="product-information">
            <h3 className="product-information__brand">Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="pricing">
              <span className="pricing__price-current">$125.00</span>
              <span className="pricing__discount">50%</span>
              <span className="pricing__price-old">$250.00</span>
            </div>
            <Purchase />
          </div>
        </main>
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/empowermint">James T. Harding</a>.
        </footer>
      </>
    )
  }
}

class ProductCarousel extends React.Component {
  render() {
    return (
      <div className="product-carousel">
        <ul className="carousel-container">
          <li id="cb0" className="carousel-big show"><img src="images/image-product-1.jpg" /></li>
          <li id="cb1" className="carousel-big"><img src="images/image-product-2.jpg" /></li>
          <li id="cb2" className="carousel-big"><img src="images/image-product-3.jpg" /></li>
          <li id="cb3" className="carousel-big"><img src="images/image-product-4.jpg" /></li>
          <button className="carousel-container__button previous">
            <img src="images/icon-previous.svg" />
          </button>
          <button className="carousel-container__button next">
            <img src="images/icon-next.svg" />
          </button>
        </ul>
        <CarouselMenu />
      </div>
    )
  }
}

class CarouselMenu extends React.Component {
  render() {
    return (
      <ul className="carousel-menu">
        <li className="carousel-thumb active"><img src="images/image-product-1-thumbnail.jpg" /></li>
        <li className="carousel-thumb"><img src="images/image-product-2-thumbnail.jpg" /></li>
        <li className="carousel-thumb"><img src="images/image-product-3-thumbnail.jpg" /></li>
        <li className="carousel-thumb"><img src="images/image-product-4-thumbnail.jpg" /></li>
      </ul>
    )
  }
}

class Purchase extends React.Component {
  render() {
    return (
      <div className="purchase">
        <div className="purchase-number">
          <button className="purchase-number__adjust"><img src="images/icon-minus.svg" /></button>
          <input className="purchase-number__display" type="number" min="1" defaultValue="1" />
          <button className="purchase-number__adjust"><img src="images/icon-plus.svg" /></button>
        </div>
        <button id="add-to-cart">Add to cart</button>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
