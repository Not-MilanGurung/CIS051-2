import { useState } from "react";

function LoginForm(){
    const [inputs, setInputs] = useState({
        fname : "",
        lname: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="text-start">
            <label>
                First Name: <br />
                <input
                    type="text"
                    name="fname"
                    value={inputs.fname}
                    onChange={handleChange}
                    className="border"
                />
            </label><br />
            <label>
                Last Name: <br />
                <input
                    type="text"
                    name="lname"
                    value={inputs.lname}
                    onChange={handleChange}
                    className="border"
                />
            </label> <br />
            <input type="submit" className="cursor-pointer my-4 rounded-md p-2 bg-blue-400 text-white hover:bg-blue-700"/>
        </form>
    )
}

export default LoginForm;