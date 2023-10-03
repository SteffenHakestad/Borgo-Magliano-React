import UploadComponent from "../components/UploadComponent";
import BlogComponent from "../components/BlogComponent";

export default function Blog() {
    return (
        <>
        <div className="header">Blogg</div>
        <UploadComponent UploadDescription="Her kan du skrive blogg innlegg som blir synlig for andre medlemer"/>
        <BlogComponent ProfileName={"Ola Normann"} 
                        ProfilePicture={'/assets/images/TempProfilePic.png'} 
                        BlogText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae malesuada lacus."}/>
        </>

    )
}