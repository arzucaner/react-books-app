import react from "react";
const Main=()=>{
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
                        <button><i class="fa-solid fa-icons"></i></button>
                    </div>
                    <img src="./images/ba1.png" alt="Book and flowers on the table"/>
                </div>
            </div>
        </>
    )
}
export default Main;    