export default function AddTravel() {
    return (
        <div className="container my-5">
            <h2 className="mb-4">Add new travel</h2>

            <div className="add-travel mb-5">
                <h3 className="mb-4">Travel details</h3>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Destination</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-geo-alt"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Destination" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">Start Date</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-calendar-event"></i>
                            </span>
                            <input type="date" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">End Date</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-calendar-event"></i>
                            </span>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    <button className="btn btn-dark">Add Travel</button>
                </div>
            </div>

            <div className="add-traveller">
                <h3 className="mb-4">New Traveller</h3>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Firstname" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Lastname" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-telephone"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Tax Code</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-card-text"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Tax Code" />
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    <button className="btn btn-dark">Add Traveller</button>
                </div>
            </div>
        </div>
    );
}
