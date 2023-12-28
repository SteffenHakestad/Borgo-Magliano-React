import React from 'react';
import NewsUploadComponent from '../components/NewsUploadComponent';
import NewsComponent from '../components/NewsComponent';


export default function News() {
    return (
        <>
            <div className="header">Nyheter</div>
            <NewsUploadComponent
                UploadDescription="Her kan du skrive nyhetsinnlegg (admin only)"
            />
            <NewsComponent
                NewsTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                NewsDescription={"Lorem ipsum dolor sit amet, Duis at tristique purus, nec tincidunt purus. Suspendisse potenti. Aliquam sodales dolor at diam tempus viverra. Praesent non lacinia lectus. Curabitur placerat volutpat ipsum ac mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices lorem et tempor lobortis. "}
            />
        </>
    );
}



// 
// This has to be reworked. I used localstorage to save the data, but it's not a solution that works with backend Db
// export default function News() {
//     const [newsData, setNewsData] = useState(() => {
//         // Load data from localStorage when the component is first mounted
//         const storedData = localStorage.getItem('newsData');
//         return storedData ? JSON.parse(storedData) : null;
//     });
//     const handleNewsSubmit = (headline, newsText) => {
//         // Update the state with the submitted data
//         const newData = { NewsTitle: headline, NewsDescription: newsText };
//         setNewsData(newData);
//         // Store data in localStorage for persistence
//         localStorage.setItem('newsData', JSON.stringify(newData));
//     };

//     useEffect(() => {
//         // Cleanup localStorage when the component is unmounted
//         return () => {
//             localStorage.removeItem('newsData');
//         };
//     }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount



// import NewsComponent from "../components/NewsComponent";
// import UploadComponent from "../components/UploadComponent";

// export default function News() {
//     return (
//         <>
//         <div className="header">Nyheter</div>
//         <UploadComponent UploadDescription="Her kan du skrive nyhetsinnlegg (admin only)" BtnFunc={() => console.log("hello")}/>
//         <NewsComponent NewsTitle={"headline user input text here"} NewsDescription={"News text user input here"}/>
//         </>
//     )
// }