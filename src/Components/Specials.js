import Card from "./Card";

const menu = [
    {
        name: "Greek Salad",
        price: "12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../icons_assets/greekSalad.jpg"),
    },

    {
        name: "Bruchetta",
        price: "5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with carlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../icons_assets/lemon dessert.jpg"),
    },

    {
        name: "Lemon Desert",
        price: "5.00",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../icons_assets/lemon dessert.jpg"),
    }
]

function Specials() {
    return(
        <section class="specials">
            <header class="half">
                <h1 class="heading"> This weeks specials!</h1>
                <button class="btn">Online Menu</button>
            </header>
            <section class="cardSection">
                {menu.map((item) => (
                    <Card 
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        imageSrc={item.getImageSrc()}
                    />
                ))}
                
            </section>
        </section>
    )
}

export default Specials;