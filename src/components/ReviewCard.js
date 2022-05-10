import React from 'react';

function ReviewCard(props) {
     
     return(

         <div className="ReviewsBox">
            {props.reviews.map(review => {
                return(
                    <div className = "ReviewsCard">
                        <div className="rev-title">{review.title}</div>
                        <div className="rev-body">{review.body}</div>
                        <div className="rev-author">{review.author}</div>
                        <div className="rev-rating">{review.rating}</div>
                    </div>    
                )
            
            })}
            
        </div>

     )

}
export default ReviewCard;