import { Link } from "react-router-dom"
export default function TravelCards({ destination }) {

    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <Link className="card shadow h-100 travel-card-link" to={`/Traveldetailcard/${destination.id}`} style={{ position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "relative" }}>
                        <img src={destination.img} alt={destination.destination} className="card-img-top city-img" />
                        <span className="show-more-pill">
                            mostra di più
                        </span>
                    </div>
                    <div className="card-body">
                        <h2 className="fw-bold">
                            {destination.destination}
                        </h2>
                        <div className="d-flex flex-column gap-1 mt-3">
                            <span className="d-block fw-bold">Partenza: {destination.departureDate}</span>
                            <span className="d-block fw-bold">Ritorno: {destination.returnDate}</span>
                            <span className="d-block fw-bold">Numero Partecipanti: {destination.participants}</span>
                            <span className="d-block fw-bold">Group Leader: {destination.tourLeader}</span>
                        </div>
                        <p className="mt-4">{destination.description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
};