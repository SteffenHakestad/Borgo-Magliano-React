export default function UploadComponent({UploadDescription}) {
    return <>
        <div className="upload-container">
            <p>{UploadDescription}</p>
            <button>
                <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
            </button>
        </div>
        </>
}
