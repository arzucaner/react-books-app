import react from "react";
const Card=({book})=>{
    console.log(book)
    return(
        <>
            {   
                 book.map((item) => {
                     let thumbnail=item.volumeInfo.imageLinks.&&item.volumInfo.imageLinks.smallThumbnail;
                     return (
                         <>
                         <div className="card">
            <img src="{thumbnail}" alt=""  />
            <div className="bottom">
                 <h3 className="title"> React JS</h3>
                 <p className="amont">&#8377;3290ss</p>
            </div>
            </div>
        </>
    )
}
export default Card;