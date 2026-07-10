import { useState } from "react";
import Form from "../Format_Components/Form";
import InputArea from "../Format_Components/InputArea";
import Button from "../Format_Components/Button";

export default function ContactMePage(){

    const formInputContent = [
        {
            label: "FIRST NAME:",
            type: "text",
            class: "inputBox",
            id: "userFirstName",
            placeholder: "Enter Name Here",
            value: "firstName"
        },
        {
            label: "LAST NAME:",
            type: "text",
            class: "inputBox",
            id: "userLastName",
            placeholder: "Enter Name Here",
            value: "lastName"
        },
        {
            label: "EMAIL:",
            type: "email",
            class: "inputBox",
            id: "userEmail",
            placeholder: "Enter Email Here",
            value: "email"
        },
        {
            label: "MESSAGE:",
            type: "text",
            class: "inputBox",
            id: "userMessage",
            placeholder: "What do you wanna say?",
            value: "message"
        }
    ];

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    });

    function sendFormRequest(e){
    e.preventDefault();

    console.log(formData);
    
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
        <div className = "contactPage-container">
            <div className = "contactPage-header">
                <h1>CONTACT ME</h1>
            </div>
            <div className = "contactPage-form">
                <Form 
                formId = "contactForm" 
                formRequest = {sendFormRequest} 
                content = {
                    formInputContent.map((input) => {
                        return(
                            <InputArea 
                            key = {input.id}
                            labelText = {input.label} 
                            InputType = {input.type} 
                            InputClass = {input.className} 
                            InputId = {input.id}
                            InputPlaceholder = {input.placeholder} 
                            InputValue = {formData[input.value]}
                            onChangeHandler = {(e) => {
                                const {value} = e.target;

                                setFormData(prevFormData => ({
                                    ...prevFormData,
                                    [input.value]: value
                                }))
                            }}
                            />
                        );
                    })
                }
                button = {
                    <Button
                    buttonText = "Submit"
                    buttonType = "submit"
                    buttonClass = "submitButton"
                    />
                }
                />
            </div>
        </div>
    );
}