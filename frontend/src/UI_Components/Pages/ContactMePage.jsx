import { useState } from "react";

export default function ContactMePage(){

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    });

    function sendFormRequest(e){
    e.preventDefault();
    
    fetch("http://localhost:5000/contact", {
        method:"POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    }
    
    return(
        <>
        <div className = "contactPage-container">
            <form id = "contactForm" onSubmit={sendFormRequest}>

                <div className = "inputArea">
                    <label>FIRST NAME:</label><br/>
                    <input
                    type = "text"
                    className = "inputBox" 
                    id = "userFirstName" 
                    placeholder = "Enter Name Here"
                    value = {formData.firstName}
                    onChange = {(e) => {
                        setFormData({
                            ...formData,
                            firstName: e.target.value
                        })
                    }}
                    required
                    /><br/>
                </div>

                <div className = "inputArea">
                    <label>LAST NAME:</label><br/>
                    <input 
                    type = "text" 
                    className = "inputBox" 
                    id = "userLastName" 
                    placeholder = "Enter Name Here"
                    value = {formData.lastName}
                    onChange = {(e) => {
                        setFormData({
                             ...formData,
                            lastName: e.target.value
                        })
                    }} 
                    required
                    /><br/>
                </div>

                <div className = "inputArea">
                    <label>EMAIL:</label><br/>
                    <input 
                    type = "email" 
                    className = "inputBox" 
                    id = "userEmail" 
                    placeholder = "Enter Email Here"
                    value = {formData.email}
                    onChange = {(e) => {
                        setFormData({
                             ...formData,
                            email: e.target.value
                        })
                    }}
                    required
                    /><br/>
                </div>

                <div className = "inputArea">
                    <label>MESSAGE:</label><br/>
                    <input 
                    type = "text" 
                    className = "inputBox" 
                    id = "userMessage"
                    placeholder = "What do you wanna say?" 
                    value = {formData.message}
                    onChange = {(e) => {
                        setFormData({
                             ...formData,
                            message: e.target.value
                        })
                    }}
                    required
                    />

                </div>

                <button
                type = "submit" 
                className = "submitButton">
                Submit
                </button>

            </form>
        </div>
        </>
    );
}