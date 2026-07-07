import { useState } from "react";
import Form from "../Format_Components/Form";
import InputArea from "../Format_Components/InputArea";
import Button from "../Format_Components/Button";

export default function ContactMePage(){

    const formContent = [
        {
            label: "FIRST NAME:",
            type: "text",
            class: "inputBox",
            id: "userFirstName",
            placeholder: "Enter Name Here",
        },
        {
            label: "LAST NAME:",
            type: "text",
            class: "inputBox",
            id: "userLastName",
            placeholder: "Enter Name Here"
        },
        {
            label: "EMAIL:",
            type: "email",
            class: "inputBox",
            id: "userEmail",
            placeholder: "Enter Email Here"
        },
        {
            label: "MESSAGE:",
            type: "text",
            class: "inputBox",
            id: "userMessage",
            placeholder: "What do you wanna say?"
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
    
    // return(
    //     <>
    //     <div className = "contactPage-container">
    //         <form id = "contactForm" onSubmit={sendFormRequest}>

    //             <div className = "inputArea">
    //                 <label>FIRST NAME:</label><br/>
    //                 <input
    //                 type = "text"
    //                 className = "inputBox" 
    //                 id = "userFirstName" 
    //                 placeholder = "Enter Name Here"
    //                 value = {formData.firstName}
    //                 onChange = {(e) => {
    //                     setFormData({
    //                         ...formData,
    //                         firstName: e.target.value
    //                     })
    //                 }}
    //                 required
    //                 /><br/>
    //             </div>

    //             <div className = "inputArea">
    //                 <label>LAST NAME:</label><br/>
    //                 <input 
    //                 type = "text" 
    //                 className = "inputBox" 
    //                 id = "userLastName" 
    //                 placeholder = "Enter Name Here"
    //                 value = {formData.lastName}
    //                 onChange = {(e) => {
    //                     setFormData({
    //                          ...formData,
    //                         lastName: e.target.value
    //                     })
    //                 }} 
    //                 required
    //                 /><br/>
    //             </div>

    //             <div className = "inputArea">
    //                 <label>EMAIL:</label><br/>
    //                 <input 
    //                 type = "email" 
    //                 className = "inputBox" 
    //                 id = "userEmail" 
    //                 placeholder = "Enter Email Here"
    //                 value = {formData.email}
    //                 onChange = {(e) => {
    //                     setFormData({
    //                          ...formData,
    //                         email: e.target.value
    //                     })
    //                 }}
    //                 required
    //                 /><br/>
    //             </div>

    //             <div className = "inputArea">
    //                 <label>MESSAGE:</label><br/>
    //                 <input 
    //                 type = "text" 
    //                 className = "inputBox" 
    //                 id = "userMessage"
    //                 placeholder = "What do you wanna say?" 
    //                 value = {formData.message}
    //                 onChange = {(e) => {
    //                     setFormData({
    //                          ...formData,
    //                         message: e.target.value
    //                     })
    //                 }}
    //                 required
    //                 />

    //             </div>

    //             <button
    //             type = "submit" 
    //             className = "submitButton">
    //             Submit
    //             </button>

    //         </form>
    //     </div>
    //     </>
    // );

    return(
        <>
            <div className = "contactPage-container">
                <Form 
                formId = "contactForm" 
                formRequest = {sendFormRequest} 
                content = {
                    formContent.map((input) => {
                        return(
                            <InputArea 
                            key = {input.id} 
                            labelText = {input.label} 
                            InputType = {input.type} 
                            InputClass = {input.className} 
                            InputId = {input.id} 
                            InputPlaceholder = {input.placeholder} 
                            onChangeHandler = {(e) => {
                                setFormData({
                                    ...formData,
                                    [input.id.replace("user", "").toLowerCase()]: e.target.value
                                })
                            }}
                            />
                        );
                    })
                }
                />
                    

                <Button
                buttonText = "Submit"
                buttonType = "submit"
                buttonClass = "submitButton"
                />
                
            </div>
        </>
    );
}