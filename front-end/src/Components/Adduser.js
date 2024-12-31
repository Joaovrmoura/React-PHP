import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Adduser() {
    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({username: '', email: '', status : ''});
    const [message, setMessage] = useState('');
    const handleInput = (e) =>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = {username:formvalue.username, email:formvalue.email, status:formvalue.status}
        const res = await axios.post("http://localhost/api-reactphp/user.php", formData);
        if(res.data.success){
            // se existe a menssagem de success(vinda do javascript)
            // ele retorna essa menssagem e redireciona depois de 2s
            setMessage(res.data.success);
            setTimeout(()=>{
                navigate('/userlist');
            },2000)
        }
    }
    return (

        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Adicionar Usuário</h5>
                        <p className="text-success"> {message}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">UserName</label>
                                <div className="col-sm-10">
                                    <input type="text" name="username" value={formvalue.username} className="form-control" onChange={ handleInput }/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label  className="col-sm-2">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" name="email" value={formvalue.email} className="form-control" onChange={ handleInput }/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Status</label>
                                <div className="col-sm-10">
                                    <select name="status" className="form-control" value={formvalue.status} onChange={ handleInput }>
                                        <option value="">--Selecione o Status--</option>
                                        <option value="1">Ativo</option>
                                        <option value="0">Inativo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button name="submit" className="btn btn-success">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Adduser;