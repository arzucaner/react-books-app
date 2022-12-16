import react, {useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const Main=()=>{}
        const [search,setSearch]=useState("");
        const [bookData,setData]=useState([]);
        const searchBook=(evt)=>{
            if(evt.key==="Enter")
        {
                axios.get('https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3?q='+search+'&key=AIzaSyBLB4hN2NRfhYbGFSlSHLlQJ6rbnXV5Opk'+'maxResults=40')
.then(res=>setData(res.data.items))
.catch(err=>console/log)

        }
}
return(
        <>
           <div className="header">
                <div className="row1">
                     <h1>Sometimes books are the best friends. It doesn't judge you, it just teaches you...</h1>  
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"/>
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i class="fa-solid fa-icons"></i></button>
                    </div>
                    <img src="./images/image1.jpg" alt="library"/>
                </div>
            </div>

            <div className="container">
              {
                <Card book={bookData}/>
              }
            </div>
        </>
    )
}
export default Main;    