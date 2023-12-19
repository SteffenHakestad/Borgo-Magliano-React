import GalleryComponent from "../components/GalleryComponent";
import GalleryUploadComponent from "../components/GalleryUploadComponent";


export default function Gallery() {
    return (
        <>
        <div className="header">Galleri</div>
        <GalleryUploadComponent UploadDescription="Her kan du laste opp dine egne bilder og se bilder som andre gjester har publisert"/>
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