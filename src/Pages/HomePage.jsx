import TravelCards from "../Componets/Travel_cards";
import Destinations from "../Data/Destinations";


export default function HomePage() {

    return (
        <>
            <div className="container p-3 mt-3">
                <h1 className="fw-bold my-4">Current Travels</h1>
                <div className="row g-4">
                    {
                        Destinations.map(destination =>
                            (<TravelCards key={destination.id} destination={destination} />))
                    }
                </div>
            </div>
        </>
    )
}