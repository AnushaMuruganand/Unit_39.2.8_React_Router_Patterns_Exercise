import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./ColorForm.css"

function ColorForm({addColor}) {
   
    const [formData, setFormData] = useState({ name: "", hex: "#ffffff" });
    const history = useHistory();

    const { hex, name } = formData;

    function handleChange(e) {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex });
        history.push("/colors");
    }
    
    return (
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter color name"
                        onChange={handleChange}
                        value={name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly />
                <div>
                    <Link to="/">Go back</Link>
                </div>
            </form>
        </div>
    );
}

export default ColorForm;