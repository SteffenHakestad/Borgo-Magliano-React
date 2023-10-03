import NewsComponent from "../components/NewsComponent";
import UploadComponent from "../components/UploadComponent";

export default function News() {
    return (
        <>
        <div className="header">Nyheter</div>
        <UploadComponent UploadDescription="Her kan du skrive nyhetsinnlegg (admin only)"/>
        <NewsComponent NewsTitle={"Lorem ipsum dolor sit amet"} NewsDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sapien augue. Morbi a erat suscipit, pellentesque neque vel, tincidunt felis. Vestibulum in nisi tristique, aliquet massa eu, cursus tellus. Nulla id lorem diam. Vivamus in quam vitae leo consectetur pharetra nec vitae orci. Suspendisse finibus quam non ligula porta, sollicitudin ullamcorper justo maximus. Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi. Sed et imperdiet quam. Integer aliquam accumsan mattis. Morbi dictum varius venenatis. Quisque id risus sagittis, pretium dolor eget, luctus dolor. "}/>
        <NewsComponent NewsTitle={"Phasellus facilisis vel leo et tempus"} NewsDescription={"Nam cursus nunc sit amet sem semper iaculis. Phasellus egestas odio vitae augue mollis, ut consequat dolor interdum. Sed eu placerat tellus. Duis scelerisque eu est eu finibus. Quisque fermentum, augue eu dignissim euismod, ante turpis rhoncus arcu, non tincidunt neque nulla eu tortor. Sed congue justo gravida, pretium elit in, consectetur turpis. Vivamus vel nisi nec libero malesuada aliquam. Etiam non neque at quam congue pulvinar. Donec hendrerit porttitor nisi, lobortis gravida libero suscipit ac."}/>
        </>


    )
}