import { Link } from "react-router-dom";

export default function Header() {


    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
                <div className="container d-flex justify-content-between">
                    <div className="py-2">
                        <Link className="nav-item nav-link active" to="/">
                            <img src="/images/BooRoad.png" alt="Logo" style={{ width: "60px" }} />
                        </Link>
                    </div>

                    <Link to="/add-travel" className="nav-link text-dark add-travel">
                        Aggiungi Viaggio
                    </Link>
                </div>
            </nav>
        </>


    )

}
