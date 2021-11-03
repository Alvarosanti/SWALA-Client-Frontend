import React from "react";
import CardOferta from "./CardOferta";

const ProductOferta = () => {
  const products = [
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914442/LADLOLA/2_p3fckj.png",
      oferta: "-5%",
      codigo: "152045",
      nombre: "-5% en turron",
      descripcion:
        "Te obsequiamos el 5% de descuento en la compra del 'Turron Milagroso'.",
      fechaInicio: "01/11/2021",
      fechaFin: "05/11/2021",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914728/LADLOLA/6_inenc4.png",
      oferta: "2 x 1",
      codigo: "152234",
      nombre: "2 x 1 en alfajores",
      descripcion:
        "Lleva 2 'Alfajores con manjar blanco' y solo realizas el pago de 1 ",
      fechaInicio: "01/11/2021",
      fechaFin: "05/11/2021",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914441/LADLOLA/3.1_naobsn.png",
      oferta: "-10%",
      codigo: "152000",
      nombre: "-10% en torta halloween",
      descripcion:
        "Te obsequiamos el 10% de descuento en la compra del 'Torta Halloween'.",
      fechaInicio: "01/11/2021",
      fechaFin: "05/11/2021",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914441/LADLOLA/1_xdls55.png",
      oferta: "2 x 1",
      codigo: "856045",
      nombre: "2 x 1 en torta decilia",
      descripcion: "Lleva 2 'Torta delicia' y solo realizas el pago de 1.",
      fechaInicio: "01/11/2021",
      fechaFin: "05/11/2021",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635914441/LADLOLA/4_mayp6o.png",
      oferta: "2 x 1",
      codigo: "120045",
      nombre: "2 x 1 en torta corazon",
      descripcion: "Lleva 2 'Torta corazon' y solo realizas el pago de 1.",
      fechaInicio: "01/11/2021",
      fechaFin: "05/11/2021",
    },
  ];

  return (
    <div className="App">
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                {/* <a href="/" className="brand-wrap">
                  Los alfajores de la Lola
                </a> */}
                <a href="/">
                  <img
                    alt="Travel"
                    src="https://res.cloudinary.com/dr9mltwij/image/upload/v1635965970/LADLOLA/logo_small_nhtupi.png"
                  />
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
          <h2 className="title-page">Oferta</h2>
          <nav>
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Catalogo</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/ofertas">Oferta</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a>Todos</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section-content padding-ofertas">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <header className="border-bottom mb-4 pb-4">
                <div className="form-inline">
                  <span className="mr-md-auto">{`${products.length} productos en oferta disponibles`}</span>
                  <select className="mr-2 form-control">
                    <option>Torta</option>
                    <option>Turron</option>
                    <option>Brownie</option>
                    <option>Alfajores</option>
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
                      <CardOferta
                        img={data.img}
                        oferta={data.oferta}
                        codigo={data.codigo}
                        nombre={data.nombre}
                        descripcion={data.descripcion}
                        fechaInicio={data.fechaInicio}
                        fechaFin={data.fechaFin}
                      />
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
export default ProductOferta;
