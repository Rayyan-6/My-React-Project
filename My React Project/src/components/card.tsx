type CardProps = {
  title: string;
  description: string | number;
};

function Card(props:CardProps){
    return(
        <div className="card">
            <div className="heading">
                {props.title}
            </div>
            <div className="desc    ">
                {props.description}            
            </div>
        </div>
    )
}


export default Card