export default function AddTravel() {

    return (
        <div className="container my-5">
            <h2>Add new travel</h2>

            <div className="add-travel">
                <h3 className="my-4">Travel detail</h3>
                <input
                    type="text"
                    className="mb-4"
                    placeholder="Destination"
                />
                <input
                    type="date"
                />
                <input
                    type="date"
                />
            </div>
            <button className="btn btn-dark">Add travel</button>


            <div className="add-traveller">
                <h3 className="mt-4">New Traveller</h3>
                <input
                    type="text"
                    className="my-4"
                    placeholder="Firstname"
                />
                <input
                    type="text"
                    placeholder="Lastname"
                />
                <input
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Phone"
                />
                <input
                    type="text"
                    placeholder="Tax Code"
                />
            </div>
            <button className="btn btn-dark">Add Traveller</button>

        </div>
    );
}