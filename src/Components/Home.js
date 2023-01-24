import '../css/style.css';
import food from '../icons_assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {

    const nav = useNavigate();
    function handleClick(){
        nav('/book')
    }

    return(
        <section className="home">
            <article class="content">
                <p class="para">
                <span class="Yellow">Little Lemon</span><br></br>
                <span class="font1_5em">Chicago</span><br /><br/>
                We are a family owned Mediterannean restaurant, focused on traditional recipes served with a modern twist.
                <br />
                <button class="btnHome" onClick={handleClick}>Reserve a table</button>
                </p>
                <img src={food} class="img" alt="ood" />
            </article>
        </section>
    )
}

export default Home;