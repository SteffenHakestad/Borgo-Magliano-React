import React, { useRef, useState, useEffect } from 'react';

export default function AdminDashboardComponent() {
    //Get ref to DOM elements
    const publishContainer = useRef(null);
    const uploadContainer = useRef(null);
    const supportContainer = useRef(null);

    //State for collapse/expand buttons
    const [publishState, setPublishState] = useState("expand");
    const [uploadState, setUploadState] = useState("expand");
    const [supportState, setSupportState] = useState("expand");

    //State for new media post input fields
    const [headline, setHeadline] = useState("");
    const [mediaText, setMediaText] = useState("");

    //State for new media post input field changes
    const handleHeadlineChange = (e) => {
        setHeadline(e.target.value);
    };
    const handleMediaTextChange = (e) => {
        setMediaText(e.target.value);
    }



    const expandInfo = (btn) => {
        switch(btn){
            case "Publish":
                setPublishState((prevState) => {
                    const newState = prevState === "collapse" ? "expand" : "collapse";
                    publishContainer.current.style.display = newState === "expand" ? "none" : "block";
                    return newState;
                });
                break;
            case "Upload":
                setUploadState((prevState) => {
                    const newState = prevState === "collapse" ? "expand" : "collapse";
                    uploadContainer.current.style.display = newState === "expand" ? "none" : "block";
                    return newState;
                });
                break;
            case "Support":
                setSupportState((prevState) => {
                    const newState = prevState === "collapse" ? "expand" : "collapse";
                    supportContainer.current.style.display = newState === "expand" ? "none" : "block";
                    return newState;
                });
                break;
            default:
                console.log("Error: Button not found");
                break;
        }
    }

    useEffect(() => {
        publishContainer.current.style.display = "none";
        uploadContainer.current.style.display = "none";
        supportContainer.current.style.display = "none";
    }, []);

    return (
        <div id="admin-dashboard">
            <h1>Administrator Dashboard</h1>
            <div className='admin-divider'></div>

            <button className='dashboard-collapse-btn' onClick={() => expandInfo("Publish")}>Publisér nytt blogg/media innlegg
                <img alt="expand icon" src='/assets/icons/icon-right-arrow.svg' className='expand-icon' style={{ display: publishState === "expand" ? "block" : "none" }}></img>
                <img alt="collapse icon" src='/assets/icons/icon-down-arrow.svg' className='collapse-icon' style={{ display: publishState === "collapse" ? "block" : "none" }}></img>
            </button>



            <div className='dashboard-collapse-container' id="collapse-1" ref={publishContainer}>
                
                <input className='input-field' name="headline-input" type="text" placeholder='Overskrift' value={headline} onChange={handleHeadlineChange} required></input>
                <textarea className='input-field' name="message-input" type="text" placeholder='Skriv din melding her!' value={mediaText} onChange={handleMediaTextChange} required></textarea>

                <button className='std-btn'>Publisér Media Innlegg</button>



            </div>
            
            <button className='dashboard-collapse-btn' onClick={() => expandInfo("Upload")}>Last opp nye bilder til fremsiden
                <img alt="expand icon" src='/assets/icons/icon-right-arrow.svg' className='expand-icon' style={{ display: uploadState === "expand" ? "block" : "none" }}></img>
                <img alt="collapse icon" src='/assets/icons/icon-down-arrow.svg' className='collapse-icon' style={{ display: uploadState === "collapse" ? "block" : "none" }}></img>
            </button>
            <div className='dashboard-collapse-container' id="collapse-2" ref={uploadContainer}>Second Menu</div>
            
            <button className='dashboard-collapse-btn' onClick={() => expandInfo("Support")}>Teknisk Support
                <img alt="expand icon" src='/assets/icons/icon-right-arrow.svg' className='expand-icon' style={{ display: supportState === "expand" ? "block" : "none" }}></img>
                <img alt="collapse icon" src='/assets/icons/icon-down-arrow.svg' className='collapse-icon' style={{ display: supportState === "collapse" ? "block" : "none" }}></img>
            </button>
            <div className='dashboard-collapse-container' id="collapse-3" ref={supportContainer}>
                <div>For teknisk support ta kontakt med:</div>
                <div id="collapse-3-container">
                    <img alt="email icon" src='/assets/icons/icon-email.svg'></img>
                    <div>
                        Steffen.hakestad@bbvisuals.no<br></br>
                        Magne.brekke@bbvisuals.no
                    </div>
                </div>
                <div id="collapse-3-container">
                    <img alt="phone icon" src='/assets/icons/icon-phone.svg'></img>
                    <div>
                        468 95 371 - Steffen Hakestad (Utvikler)
                    </div>
                </div>
  
            </div>
        </div>
    );
}



/* <div className='dashboard-collapse-container'>
<input className="media-headline-input" type="text" id="media-headline" name="media-headline" placeholder='Overskrift'/>
<input className="media-body-input" type="text" id="media-body" name="media-body" placeholder='Media Tekst'/>
<button id="publish-btn" type="submit">Publisér</button>
</div> */