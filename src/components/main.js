import react, {useState}from "react";
import axios from "axios";
const Main=()=>{
    const Main=()=>{}
        const [search,setSearch]=useState("");
        const searchBook=(evt)=>{
            if(evt.key==="Enter")
        {
                console.log("hello");
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
                    <img src="./images/ba1.png" alt="Book and flowers on the table"/>
                </div>
            </div>

            <div className="container">
                <card/>
            </div>
        </>
    )
}
export default Main;    