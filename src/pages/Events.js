import EventComponent from "../components/EventComponent"
import UploadComponent from "../components/UploadComponent";

export default function Events() {
    return (
        <>
        <div className="header">Eventer</div>
        <div id="event-component-container">
            <UploadComponent UploadDescription="Her kan du skrive event-innlegg (admin only)"/>
            <EventComponent EventTitle={"Grillkveld"} EventDescription={"Etiam viverra pretium sapien, at vehicula augue consequat at. Proin turpis tellus, volutpat in tristique vel, consequat eu ante. Aliquam at felis nulla. Donec id diam quis justo lobortis sodales. Aliquam maximus gravida mattis. Praesent nibh erat, commodo vitae tincidunt eget, ultrices sit amet justo. Phasellus id elementum orci. Pellentesque in mattis sem. "} EventImagePath={'/assets/images/EventTemp.png'}/>
            <EventComponent EventTitle={"Bursdagsfest"} EventDescription={"Nam cursus nunc sit amet sem semper iaculis. Phasellus egestas odio vitae augue mollis, ut consequat dolor interdum. Sed eu placerat tellus. Duis scelerisque eu est eu finibus. Quisque fermentum, augue eu dignissim euismod, ante turpis rhoncus arcu, non tincidunt neque nulla eu tortor. Sed congue justo gravida, pretium elit in, consectetur turpis. Vivamus vel nisi nec libero malesuada aliquam. Etiam non neque at quam congue pulvinar. Donec hendrerit porttitor nisi, lobortis gravida libero suscipit ac. "} EventImagePath={'/assets/images/EventTemp1.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
        </div>


        </>


    )
}