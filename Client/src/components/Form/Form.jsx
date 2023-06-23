import {  useState } from "react";
import validation from "../validation";
import style from './Form.module.css'

const Forms = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
});
const [errors, setErrors] = useState({});
const handleChange = (e) => {
    setErrors(validation({...userData,[e.target.name]: e.target.value}));
    setUserData({...userData,[e.target.name]: e.target.value })
}
const handlerSubmit = (e) => {
    e.preventDefault();
     login(userData);
};


    return (
        <div>
        <form className={style.form} onClick={handlerSubmit}  >
     <div>
<label htmlFor="email">Email: </label>
<input onChange={handleChange} value={userData.email} type="text"  id="email" name="email"></input>
    </div>
    {errors.e1 ? (<p>{errors.e1}</p>)  : errors.e2 ? (
        <p>{errors.e2}</p>) : (<p>{errors.e3}</p>)
    }
    <div>
<label htmlFor="password">Password: </label>
<input onChange={handleChange} value={userData.password} type="password" id="password" name="password"></input>
    </div>
    {errors.p1 ? (<p>{errors.p1}</p>)  :  <p>{errors.p2}</p>
    }
    <div>
<button  type="SUBMIT">SUBMIT</button>
    </div>
        </form>
    
        </div>
    )
}
export default Forms;