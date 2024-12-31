import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserList() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const getUserData = async () => {
            const reqData = await fetch("http://localhost/api-reactphp/user.php");
            const resData = await reqData.json();
            console.log(resData);
            setUserData(resData);
        }
        getUserData();
    }, [])
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Lista de usuários</h5>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Nome de usuario</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((uData, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{uData.username}</td>
                                                <td>{uData.email}</td>
                                                <td>{uData.status == 1 ? "active" : "inactive"}</td>                                           
                                                <td><Link to={"/edituser"+uData.id} className="btn btn-primary mx-2">Editar</Link>
                                                <Link to={"/deletetuser" + uData.id} className="btn btn-danger">Delete</Link></td>
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default UserList;