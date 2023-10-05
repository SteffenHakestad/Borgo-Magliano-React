import GalleryComponent from "../components/GalleryComponent";
import UploadComponent from "../components/UploadComponent";


export default function Gallery() {
    return (
        <>
        <div className="header">Galleri</div>
        <UploadComponent UploadDescription="Her kan du laste opp dine egne bilder og se bilder som andre gjester har publisert"/>
        <div className="gallery-container">
            <GalleryComponent ProfileName={"Ola Normann"}
                                ProfilePicture={'/assets/images/TempProfilePic.png'}
                                GalleryImagePath={"/assets/images/Slide1.jpg"}
                                                        />
            <GalleryComponent ProfileName={"Ola Normann"}
                        ProfilePicture={'/assets/images/TempProfilePic.png'}
                        GalleryImagePath={"/assets/images/Slide2.jpg"}
                                                />
            <GalleryComponent ProfileName={"Ola Normann"}
            ProfilePicture={'/assets/images/TempProfilePic.png'}
            GalleryImagePath={"/assets/images/Slide2.jpg"}
                                    />
        </div>

        </>


    )
}