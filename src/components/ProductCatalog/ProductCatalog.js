import React from "react";
import CardProduct from "./CardProduct";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
<<<<<<< HEAD

	const products = [
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		},
		{
			img: 'https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg',
			nombre: 'Alfajores con manjar blanco',
			descripcion: 'Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.',
			precio: '30'
		}
	];

	return (
		<div className="App">
			<header class="section-header">
				<section class="header-main border-bottom">
					<div class="contenedor">
						<div class="row align-items-center">
							<div class="col-lg-2 col-4">
								<a href="/" class="brand-wrap">
									nombre de empresa
								</a>
							</div>
							<div class="col-lg-6 col-sm-12">
								<form action="#" class="buscar">
									<div class="input-group w-100">
										<input type="text" class="form-control" placeholder="Buscar" />
										<div class="input-group-append">
											<button class="btn btn-primary" type="submit">
												<i class="fa fa-search"> </i>
											</button>
										</div>
									</div>
								</form>
							</div>
							<div class="col-lg-4 col-sm-6 col-12">
								<div class="widgets-wrap float-md-right">
									<div class="widget-header mr-3">
										<a href="#" class="icon icon-sm rounded-circle border">
											{' '}
											<i clase="fa fa-shopping-cart"> </i>{' '}
										</a>
										<span class="insignia insignia-píldora insignia-peligro notificar"> 0 </span>
									</div>
									<div class="widget-header icontext">
										<a href="#" class="icon icon-sm rounded-circle border">
											{' '}
											<i clase="fa fa-usuario"> </i>{' '}
										</a>
										<div class="texto">
											<span class="text-muted"> ¡Bienvenido! </span>
											<div>
												<a href="#"> Entra </a> |
												<a href="#"> Registro </a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</header>
=======
  const products = [
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
      precio: "30",
    },
    {
      img: "https://res.cloudinary.com/dr9mltwij/image/upload/v1635043546/LADLOLA/founder2_xa3t6m.jpg",
      nombre: "Alfajores con manjar blanco",
      descripcion:
        "Fabricados a mano con ingredientes selectos, tamaño regular, 12 unidades, bajo en azucar.",
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
>>>>>>> 5c0202dac2fda2ed81e88e62e89df732f80dd43f

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

<<<<<<< HEAD
			<section class="section-content padding-y">
				<div class="container">
					<div class="row">
						<aside class="col-md-3">
							<div class="card">
								{/*categories 1*/}
								<article class="filter-group">
									<header class="card-header">
										<a
											href="#"
											data-toggle="collapse"
											data-target="#collapse_1"
											aria-expanded="true"
											class=""
										>
											<i class="icon-control fa fa-chevron-down" />
											<h6 class="title">Categorias</h6>
										</a>
									</header>
									<div class="filter-content collapse show" id="collapse_1">
										<div class="card-body">
											<form class="pb-3">
												<div class="input-group">
													<input type="text" class="form-control" placeholder="Search" />
													<div class="input-group-append">
														<button class="btn btn-light" type="button">
															<i class="fa fa-search" />
														</button>
													</div>
												</div>
											</form>

											<ul class="list-menu">
												<li>
													<a href="#">Cakes </a>
												</li>
												<li>
													<a href="#">Cupcakes</a>
												</li>
												<li>
													<a href="#">Alfajores</a>
												</li>
												<li>
													<a href="#">Brownies</a>
												</li>
											</ul>
										</div>
									</div>
								</article>
								{/*Oferta */}
								<article class="filter-group">
									<header class="card-header">
										<a
											href="#"
											data-toggle="collapse"
											data-target="#collapse_3"
											aria-expanded="true"
											class=""
										>
											<h6 class="title">Ofertas disponibles</h6>
										</a>
									</header>
									<Link to="/ofertas">
										<div class="filter-content collapse show" id="collapse_2">
											<div class="card-body">
												<Card sx={{ minWidth: 200 }} >
													<CardContent>
														<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
															Ofertas en Brownies
														</Typography>
														<Typography variant="h5" component="div">
														</Typography>
														<Typography sx={{ fontSize: 40 }} color="text.secondary">
															30% <span style={{fontSize:'20px'}}> dscto </span>
														</Typography>							
													</CardContent>
												</Card>
											</div>
										</div>
									</Link>
								</article>

								{/*
								<article class="filter-group">
									<header class="card-header">
										<a
											href="#"
											data-toggle="collapse"
											data-target="#collapse_2"
											aria-expanded="true"
											class=""
										>
											<i class="icon-control fa fa-chevron-down" />
											<h6 class="title">Brands </h6>
										</a>
									</header>
									<div class="filter-content collapse show" id="collapse_4">
										<div class="card-body">
											<label class="checkbox-btn">
												<input type="checkbox" />
												<span class="btn btn-light"> XS </span>
											</label>
											<label class="checkbox-btn">
												<input type="checkbox" />
												<span class="btn btn-light"> SM </span>
											</label>
											<label class="checkbox-btn">
												<input type="checkbox" />
												<span class="btn btn-light"> LG </span>
											</label>
											<label class="checkbox-btn">
												<input type="checkbox" />
												<span class="btn btn-light"> XXL </span>
											</label>
										</div>
									</div>
									<div class="filter-content collapse show" id="collapse_2">
										<div class="card-body">
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">
													Mercedes
													<b class="badge badge-pill badge-light float-right">120</b>{' '}
												</div>
											</label>
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">
													Toyota
													<b class="badge badge-pill badge-light float-right">15</b>{' '}
												</div>
											</label>
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">
													Mitsubishi
													<b class="badge badge-pill badge-light float-right">35</b>{' '}
												</div>
											</label>
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">
													Nissan
													<b class="badge badge-pill badge-light float-right">89</b>{' '}
												</div>
											</label>
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" />
												<div class="custom-control-label">
													Honda
													<b class="badge badge-pill badge-light float-right">30</b>{' '}
												</div>
											</label>
										</div>
									</div>
								</article>	
*/}

								{/*mas filtros  */}
								<article class="filter-group">
									<header class="card-header">
										<a
											href="#"
											data-toggle="collapse"
											data-target="#collapse_5"
											aria-expanded="false"
											class=""
										>
											<i class="icon-control fa fa-chevron-down" />
											<h6 class="title">More filter </h6>
										</a>
									</header>
									<div class="filter-content collapse in" id="collapse_5">
										<div class="card-body">
											<label class="custom-control custom-radio">
												<input
													type="radio"
													name="myfilter_radio"
													checked=""
													class="custom-control-input"
												/>
												<div class="custom-control-label">Any condition</div>
											</label>
											<label class="custom-control custom-radio">
												<input
													type="radio"
													name="myfilter_radio"
													class="custom-control-input"
												/>
												<div class="custom-control-label">Brand new </div>
											</label>
											<label class="custom-control custom-radio">
												<input
													type="radio"
													name="myfilter_radio"
													class="custom-control-input"
												/>
												<div class="custom-control-label">Used items</div>
											</label>
											<label class="custom-control custom-radio">
												<input
													type="radio"
													name="myfilter_radio"
													class="custom-control-input"
												/>
												<div class="custom-control-label">Very old</div>
											</label>
										</div>
									</div>
								</article>

							</div>
						</aside>
						<main class="col-md-9">
							<header class="border-bottom mb-4 pb-3">
								<div class="form-inline">
									<span class="mr-md-auto">{`${products.length} productos disponibles`}</span>
									<select class="mr-2 form-control">
										<option>Latest items</option>
										<option>Trending</option>
										<option>Most Popular</option>
										<option>Cheapest</option>
									</select>
									<div class="btn-group">
										<a
											href="#"
											class="btn btn-outline-secondary"
											data-toggle="tooltip"
											title="List view"
										>
											<i class="fa fa-bars" />
										</a>
										<a
											href="#"
											class="btn  btn-outline-secondary active"
											data-toggle="tooltip"
											title="Grid view"
										>
											<i class="fa fa-th" />
										</a>
									</div>
								</div>
							</header>
							{/*products*/}
							<div class="row">
								{products.map((data) => (
									<div class="col-md-4">
										<figure class="card card-product-grid">
											<CardProduct
												img={data.img}
												nombre={data.nombre}
												descripcion={data.descripcion}
												precio={data.precio}
											/>
										</figure>
									</div>
								))}
							</div>
							<nav class="mt-4" aria-label="Page navigation sample">
								<ul class="pagination">
									<li class="page-item disabled">
										<a class="page-link" href="#">
											Previous
										</a>
									</li>
									<li class="page-item active">
										<a class="page-link" href="#">
											1
										</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											2
										</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											3
										</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
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
=======
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
>>>>>>> 5c0202dac2fda2ed81e88e62e89df732f80dd43f
};

export default ProductCatalog;
