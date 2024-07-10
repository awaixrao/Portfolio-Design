


function PostCards(props){

    return(
<>

<div className="card " style={{ width: "20rem" }}>
{props.img}
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">
     {props.text}
    </p>
 
  </div>
</div>



</>
    )
}
export default PostCards