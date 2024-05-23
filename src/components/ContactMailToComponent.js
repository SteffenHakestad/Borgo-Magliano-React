import React, { useState } from 'react';

export default function ContactMailToComponent() {

    const [subject, setSubject] = useState("");
    const [senderName, setSenderName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };
    const handleNameChange = (e) => {
        setSenderName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const contactFormData = new URLSearchParams({
            subject: subject,
            name: senderName,
            email: email,
            phone: phone,
            message: message
        });
    
        const url = "https://script.google.com/macros/s/AKfycbzge2sjv5Q9rIgJVpYPKawrP9mUT7GiN3-zYOddXzIo9tlyOczQgYRXrqxooW-mOSnf/exec";
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: contactFormData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
    
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                console.log("Mail sent successfully!");
            } else {
                console.error("Error in sending mail", response.statusText);
            }
        } catch (error) {
            console.error("Network error", error);
        }
    };
    
    return (
        <div className="mailto-container">
            <h1>Bestill tjenester eller kontakt meg!</h1>
            <div className='divider'></div>
                <form id='mail-form' onSubmit={handleSubmit}>
                    <div id='contact-info-container'>
                        <input className='input-field' name="subject-input" type="text" placeholder='Emne' value={subject} onChange={handleSubjectChange} required></input>
                        <input className='input-field' name="name-input" type="text" placeholder='Ditt Navn' value={senderName} onChange={handleNameChange} required></input>
                        <input className='input-field' name="email-input" type="email" placeholder='E-post Adresse' value={email} onChange={handleEmailChange} required></input>
                        <input className='input-field' name="phone-input" type="numeric" placeholder='Telefonnummer' value={phone} onChange={handlePhoneChange}></input>
                    </div>
                    <div id='contact-message-container'>
                        <textarea className='input-field' name="message-input" type="text" placeholder='Skriv din melding her!' value={message} onChange={handleMessageChange} required></textarea>
                    </div>
                    <div id="btn-container">
                        <input className="submit-mail-btn std-btn" type="submit" value="Send"></input>
                    </div>
                </form>
        </div>
    );
}




//Code to send formdata to apps sscript, this is using xhr instrad of fetch
// const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create new form data and append values from input fields to it.
//     const contactFormData = new FormData();
//     contactFormData.append("subject", subject);
//     contactFormData.append("name", senderName);
//     contactFormData.append("email", email);
//     contactFormData.append("phone", phone);
//     contactFormData.append("message", message);

//     const url = "https://script.google.com/macros/s/AKfycbypTrtYnxc4xn2Y4sADHxbnW-TpmHzwfq8id4gOOkUeaoQ21S7U2EiCHG7-segV4uga/exec";
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//             console.log("Mail sent successfully!")
//         }
//     };
//     xhr.send(new URLSearchParams(contactFormData).toString());
//}