import { useState } from "react";

export default function AddTravel() {
    const [travel, setTravel] = useState({
        destination: "",
        startDate: "",
        endDate: "",
    });

    const [traveller, setTraveller] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        taxCode: "",
    });

    const handleTravelChange = (e) => {
        setTravel({ ...travel, [e.target.name]: e.target.value });
    };

    const handleTravellerChange = (e) => {
        setTraveller({ ...traveller, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Travel: ${JSON.stringify(travel, null, 2)}\nTraveller: ${JSON.stringify(traveller, null, 2)}`
        );
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4 fw-bold">Aggiungi nuovo viaggio</h1>
            <form onSubmit={handleSubmit}>
                <div className="add-travel mb-5">
                    <h2 className="mb-4 fw-bold">Dettagli viaggio</h2>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Destinazione</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Destinazione"
                                    name="destination"
                                    value={travel.destination}
                                    onChange={handleTravelChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Partenza</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-calendar-event"></i>
                                </span>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="startDate"
                                    value={travel.startDate}
                                    onChange={handleTravelChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label className="form-label">Ritorno</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-calendar-event"></i>
                                </span>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="endDate"
                                    value={travel.endDate}
                                    onChange={handleTravelChange}
                                />
                            </div>
                        </div>

                        <h5 className="fw-bolder">Accompagnatore</h5>
                        <div className="col-md-6">
                            <label className="form-label">Nome</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inserire un nome"
                                    name="firstName"
                                    value={traveller.firstName}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Cognome</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inserire Cognome"
                                    name="lastName"
                                    value={traveller.lastName}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="add-traveller">
                    <h5 className="mb-4 fw-bolder">Inserisci Partecipante</h5>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Nome</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inserire un nome"
                                    name="firstName"
                                    value={traveller.firstName}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Cognome</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inserire Cognome"
                                    name="lastName"
                                    value={traveller.lastName}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={traveller.email}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Cellulare</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-telephone"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Scrivi il tuo numero"
                                    name="phone"
                                    value={traveller.phone}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Codice Fiscale</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-card-text"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Inserisci codice fiscale"
                                    name="taxCode"
                                    value={traveller.taxCode}
                                    onChange={handleTravellerChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-dark" type="submit">
                            Aggiungi Viaggio
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
