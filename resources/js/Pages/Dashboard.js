import { Head, Link } from "@inertiajs/inertia-react";
import Header from "@/Layouts/Authenticated/Header";
import { useState, useRef } from "react";
import { MDBDataTable } from "mdbreact";

export default function Dashboard({ user }) {
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
            <Head>
                <title>Dashboard</title>
                <link
                    rel="stylesheet"
                    href="/css/theme/assets/css/main/app.css"
                />
                <link
                    rel="shortcut icon"
                    href="/css/theme/assets/images/logo/favicon.svg"
                    type="image/x-icon"
                />
                <link
                    rel="shortcut icon"
                    href="/css/theme/assets/images/logo/favicon.png"
                    type="image/png"
                />

                <link
                    rel="stylesheet"
                    href="/css/theme/assets/css/shared/iconly.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                />
            </Head>
            <div id="app">
                <div id="main" className="layout-horizontal">
                    <Header />
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
