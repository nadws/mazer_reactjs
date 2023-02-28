import Header from "@/Layouts/Authenticated/Header";
export default function purchase() {
    return (
        <>
            <div id="app">
                <div id="main" className="layout-horizontal">
                    <Header />
                    <div className="content-wrapper container">
                        <div className="page-heading">
                            <h3>Horizontal Layout</h3>
                        </div>
                        <div className="page-content">
                            <section className="row">
                                <div className="col-xl-12 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    Card With Header And Footer
                                                </h4>
                                                <p className="card-text">
                                                    Gummies bonbon apple pie
                                                    fruitcake icing biscuit
                                                    apple pie jelly-o sweet
                                                    roll. Toffee sugar plum
                                                    sugar plum jelly-o jujubes
                                                    bonbon dessert carrot cake.
                                                </p>
                                            </div>
                                            <img
                                                className="img-fluid w-100"
                                                src="/css/theme/assets/images/samples/banana.jpg"
                                                alt="Card image cap"
                                            />
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <span>Card Footer</span>
                                            <button className="btn btn-light-primary">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <footer>
                        <div className="container">
                            <div className="footer clearfix mb-0 text-muted">
                                <div className="float-start">
                                    <p>2021 © Mazer</p>
                                </div>
                                <div className="float-end">
                                    <p>
                                        Crafted with
                                        <span className="text-danger">
                                            <i className="bi bi-heart" />
                                        </span>
                                        by <a href="https://saugi.me">Saugi</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
