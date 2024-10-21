import React, { useState} from "react";
import { Link } from "react-router-dom";

function Users () {
    const [users, setUsers] = useState([{
        Name: "Doan Nguyen Phat", Email: "phatdoan.1014@gmail.com" ,Age: 21
    },
    {
        Name: "Bui Thi Phuong Ngan", Email: "buiphuongngan@gmail.com" ,Age: 21
    }
    ])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add a User</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actionn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-info">Update User</Link>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;