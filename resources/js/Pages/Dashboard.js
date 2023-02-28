import { Head, Link } from "@inertiajs/inertia-react";
import Header from "@/Layouts/Authenticated/Header";
import { useState, useRef, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import FadeLoader from "react-spinners/FadeLoader";
export default function Dashboard({ user }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    const data = {
        columns: [
            {
                label: "No",
                field: "no",
            },
            {
                label: "Name",
                field: "name",
            },
            {
                label: "Email",
                field: "email",
            },
            {
                label: "Aksi",
                field: "aksi",
            },
        ],
        rows: user.map((i, n) => ({
            no: n + 1,
            name: i.name,
            email: i.email,
            aksi: [
                <a className="btn btn-warning btn-sm mr-2">
                    <i className="fas fa-edit"></i>
                </a>,
                <Link
                    className="btn btn-danger btn-sm"
                    href={route("delete", i.id)}
                    onClick={() => confirm("testing")}
                >
                    <i className="fas fa-trash-alt"></i>
                </Link>,
            ],
        })),
    };
    const options = {
        BottomColumns: false,
    };

    return (
        <>
            <div id="app">
                <div id="main" className="layout-horizontal">
                    <Header />
                    {loading ? (
                        <div className="content-wrapper container">
                            <div className="page-heading">
                                <h3>Horizontal Layout</h3>
                            </div>
                            <div className="page-content">
                                <section className="row justify-content-center">
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4">
                                        <FadeLoader
                                            color={"#122964"}
                                            loading={loading}
                                            size={1500}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />
                                    </div>
                                    <div className="col-lg-4"></div>
                                </section>
                            </div>
                        </div>
                    ) : (
                        <div className="content-wrapper container">
                            <div className="page-heading">
                                <h3>Horizontal Layout</h3>
                            </div>
                            <div className="page-content">
                                <section className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Menu Awal</h5>
                                            </div>
                                            <div className="card-body">
                                                <MDBDataTable
                                                    hover
                                                    data={data}
                                                    className="mt-2"
                                                    noBottomColumns
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}
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
