import BlogComponent from "../components/BlogComponent";
import BlogUploadComponent from "../components/BlogUploadComponent";

export default function Blog() {
    return (
        <>
        <div className="header">Blogg</div>
        <BlogUploadComponent UploadDescription="Her kan du skrive blogg innlegg som blir synlig for andre medlemer"/>
        <BlogComponent ProfileName={"Ola Normann"} 
                        ProfilePicture={'/assets/images/TempProfilePic.png'} 
                        BlogText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie justo tortor, nec interdum orci rhoncus id. Nulla euismod nibh ac turpis ullamcorper dignissim. Etiam congue non enim quis aliquam. Cras elementum pulvinar euismod. Integer lorem metus, posuere nec pulvinar in, placerat nec orci. Cras ultrices, tortor vitae rutrum venenatis, dolor lectus mollis arcu, vel venenatis nulla augue a risus. Vivamus massa metus, maximus sit amet justo nec, rutrum efficitur augue. Suspendisse commodo lorem nec urna vehicula, in elementum justo tincidunt. Nullam mollis nisl neque, et molestie orci placerat ut."}
                        BlogImagePath1={"/assets/images/Slide1.jpg"}
                        BlogImagePath2={"/assets/images/Slide2.jpg"}/>
        <BlogComponent ProfileName={"Ola Normann"} 
                ProfilePicture={'/assets/images/TempProfilePic.png'} 
                BlogText={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare, eros et commodo semper, orci diam mollis felis, luctus aliquet eros velit eu leo. Aenean pellentesque nisl quis odio feugiat pellentesque. Mauris quis felis vitae lorem venenatis accumsan. Vivamus orci magna, mattis et posuere eu, tempor vitae turpis. Donec rutrum in lorem ac auctor. Aenean in mattis augue. Nullam fermentum ligula a lacinia interdum. Ut scelerisque et est a blandit. Maecenas vel ante massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam eget mi imperdiet, tristique neque a, consectetur nisl. Nulla commodo dapibus sem ac dapibus.Sed eu risus eu felis dictum pretium. Suspendisse vel lacus et leo iaculis condimentum. Quisque ut leo magna. Sed accumsan id tellus vel vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare vel urna vitae venenatis. Fusce varius tempus commodo. Nullam aliquam maximus tortor eget accumsan. Nulla ac interdum risus, imperdiet accumsan lectus. Cras dolor justo, rutrum sed enim in, mollis porta urna. Donec dapibus vulputate ante, vitae fringilla urna tincidunt et. Quisque dignissim eros nibh, vel bibendum est eleifend id. Mauris faucibus nec enim eu maximus. Praesent nec feugiat nulla. Duis semper in eros et imperdiet. Ut scelerisque turpis sit amet lectus molestie, eget pharetra tortor dictum. Pellentesque facilisis congue congue. Ut leo enim, imperdiet id commodo a, efficitur ut magna. Sed sit amet mauris nec nunc elementum lobortis. Phasellus quis mattis justo, quis porttitor diam. Nunc facilisis nunc nec ligula volutpat, eget tincidunt velit blandit. Praesent at sem eget sapien sollicitudin dapibus eu at velit. Pellentesque fermentum sollicitudin maximus. Ut tincidunt orci vitae justo vestibulum, nec mattis lacus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."}
                BlogImagePath1={"/assets/images/Slide3.jpg"}
                BlogImagePath2={"/assets/images/EventTemp.png"}/>
        </>

    )
}


