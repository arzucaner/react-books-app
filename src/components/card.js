import react from "react";
const [show,setShow]=useState(false);
const [bookItem,setItem]=useState();
const Card = ({book}) => { 
console.log (book)
  
         
                 book.map((item) => {                       
                 let thumbnail=item.volumeInfo.imageLinks && item.volumInfo.imageLinks.smallThumbnail;
                 let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                 if(thumbnail!= undefined && amount !=undefined)
                 {
                    return (
                        <>
                        <div className="card" onClick={()=>{setShow(true);setItem(item)}}>                    
                        <img src="{thumbnail}" alt=""/>
                        <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <p className="amount">&#7377;{amount}</p>
                        </div>
                        </div>
                        <Modal show={show} item={bookItem} onClose={()=}/>
                        </>
                    )
                 }
                })
              }

