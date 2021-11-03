import React from "react";
import CardProduct from "./CardProduct";

const ProductCatalog = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914441/LADLOLA/5_urpzjj.png",
      nombre: "Torta San Valentin",
      descripcion:
        "Fabricado con queque de vainilla, humedecido con face con leche, 10 porciones, bajo en azucar",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914442/LADLOLA/2_p3fckj.png",
      nombre: "Turrón Milagro",
      descripcion:
        "Fabricado con finos y selectos ingredientes, con trigo fortificado, zumo de frutas de membrillo y piña.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914441/LADLOLA/4_mayp6o.png",
      nombre: "Torta de zanahoria",	
      descripcion:
        "Fabricado con  zanahoria machacada mezclada en la masa, dando una textura densa y suave al pastel.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914728/LADLOLA/6_inenc4.png",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635912979/LADLOLA/amor1_de_oso_wlsej8.jpg",
      nombre: "Torta amor de oso",
      descripcion:
        "Fabricados con queque de chocolate y relleno de fudge y manjar blanco, 12 porciones, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1634593559/LADLOLA/Torta_promocion_2020_husslo.jpg",
      nombre: "Torta de promocion 2020",
      descripcion:
        "Fabricados con tres deliciosas capas de brownie y un exquisito doble relleno de queso crema sabor a chocolate",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635913164/LADLOLA/yolita_girjfh.png",
      nombre: "Torta cumpleañera",
      descripcion:
        "Fabricado con tres capas de bizcocho de leche con yogurt, con un delicioso triple relleno de queso crema y galletas. ",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635913551/LADLOLA/tortaQuincea%C3%B1era_eh3hml.png",
      nombre: "Torta quinceañera",
      descripcion:
        "Fabricado con tres capas de bizcocho de chocolate, con un delicioso triple relleno de queso fudge y galletas chocochips. ",
      precio: "30",
    },
  ];
  return (
    <div className="App">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a href="/" className="brand-wrap">
                  Los alfajores de la Lola
                </a>
              </div>
              <div className="col-lg-6 col-sm-12">
                <form action="/#" className="buscar">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"> </i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <a href="/#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-shopping-cart"> </i>
                    </a>
                    <span className="badge badge-pill notify">0 </span>
                  </div>
                  <div className="widget-header icontext">
                    <a href="/#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-user"> </i>
                    </a>
                    <div className="texto">
                      <span className="text-muted"> ㅤㅤ¡Bienvenido! </span>
                      <div>
                        <a href="/#"> Iniciar sesion </a> |
                        <a href="/#"> Registrar </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Catalogo</h2>
          <nav>
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Catalogo</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a>Todos</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="card">
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="/#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down" />
                      <h6 className="title">Product type</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                      <form className="pb-3">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-light" type="button">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </form>

                      <ul className="list-menu">
                        <li>
                          <a href="/#">People </a>
                        </li>
                        <li>
                          <a href="/#">Watches </a>
                        </li>
                        <li>
                          <a href="/#">Cinema </a>
                        </li>
                        <li>
                          <a href="/#">Clothes </a>
                        </li>
                        <li>
                          <a href="/#">Home items </a>
                        </li>
                        <li>
                          <a href="/#">Animals</a>
                        </li>
                        <li>
                          <a href="/#">People </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="/#"
                      data-toggle="collapse"
                      data-target="#collapse_2"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down" />
                      <h6 className="title">Brands </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <div className="custom-control-label">
                          Mercedes
                          <b className="badge badge-pill badge-light float-right">
                            120
                          </b>{" "}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <div className="custom-control-label">
                          Toyota
                          <b className="badge badge-pill badge-light float-right">
                            15
                          </b>{" "}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <div className="custom-control-label">
                          Mitsubishi
                          <b className="badge badge-pill badge-light float-right">
                            35
                          </b>{" "}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <div className="custom-control-label">
                          Nissan
                          <b className="badge badge-pill badge-light float-right">
                            89
                          </b>{" "}
                        </div>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <div className="custom-control-label">
                          Honda
                          <b className="badge badge-pill badge-light float-right">
                            30
                          </b>{" "}
                        </div>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="/#"
                      data-toggle="collapse"
                      data-target="#collapse_3"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down" />
                      <h6 className="title">Price range </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_3">
                    <div className="card-body">
                      <input
                        type="range"
                        className="custom-range"
                        min="0"
                        max="100"
                        name=""
                      />
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Min</label>
                          <input
                            className="form-control"
                            placeholder="$0"
                            type="number"
                          />
                        </div>
                        <div className="form-group text-right col-md-6">
                          <label>Max</label>
                          <input
                            className="form-control"
                            placeholder="$1,0000"
                            type="number"
                          />
                        </div>
                      </div>
                      <button className="btn btn-block btn-primary">Apply</button>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="/#"
                      data-toggle="collapse"
                      data-target="#collapse_4"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down" />
                      <h6 className="title">Sizes </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_4">
                    <div className="card-body">
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> XS </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> SM </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> LG </span>
                      </label>
                      <label className="checkbox-btn">
                        <input type="checkbox" />
                        <span className="btn btn-light"> XXL </span>
                      </label>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="/#"
                      data-toggle="collapse"
                      data-target="#collapse_5"
                      aria-expanded="false"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down" />
                      <h6 className="title">More filter </h6>
                    </a>
                  </header>
                  <div className="filter-content collapse in" id="collapse_5">
                    <div className="card-body">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          checked=""
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Any condition</div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Brand new </div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Used items</div>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          name="myfilter_radio"
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">Very old</div>
                      </label>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">{`${products.length} productos disponibles`}</span>
                  <select className="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div className="btn-group">
                    <a
                      href="/#"
                      className="btn btn-outline-secondary"
                      data-toggle="tooltip"
                      title="List view"
                    >
                      <i className="fa fa-bars" />
                    </a>
                    <a
                      href="/#"
                      className="btn  btn-outline-secondary active"
                      data-toggle="tooltip"
                      title="Grid view"
                    >
                      <i className="fa fa-th" />
                    </a>
                  </div>
                </div>
              </header>
              {/*products*/}
              {}
              <div className="row">
                {products.map((data) => (
                  <div className="col-md-4">
                    <figure className="card card-product-grid">
                      <CardProduct
                        img={data.img}
                        nombre={data.nombre}
                        descripcion={data.descripcion}
                        precio={data.precio}
                      />
                      {/* <CardOferta
                        img={data.img}
                        oferta={data.oferta}
                        nombre={data.nombre}
                        descripcion={data.descripcion}
                        precio={data.precio}
                      /> */}
                    </figure>
                  </div>
                ))}
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="/#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="/#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;
