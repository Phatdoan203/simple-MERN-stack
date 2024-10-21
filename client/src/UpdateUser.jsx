import React from "react";
import { Link } from "react-router-dom";
function UpdateUser () {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Update Name" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Update Email" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Update Age" className="form-control" />
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-success">Update</button>
                        <Link to="/" className="btn btn-danger">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;