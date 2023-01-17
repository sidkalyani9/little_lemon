function Card({name, price,description,imageSrc}) {
    return(
        <article className="card">
            <img src={imageSrc} className="cardImg" alt="Greek Salad" />
            <heading className="cardHeading">
                <h1>{name}</h1>
                <h1 className="alignRight">${price}</h1>
            </heading>
            <p className="cardDesc"> {description}</p>
            <button class="cardBtn">Order a Delivery</button>
        </article>
    )
}

export default Card;