import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        Vinyl asymmetrical squid tofu irony kickstarter yuccie
                        taxidermy gentrify tbh church-key freegan hot chicken
                        fixie. Fit banh mi franzen mixtape pitchfork. Helvetica 
                        kombucha health goth trust fund selfies mustache neutral 
                        milk hotel plaid bitters poutine Brooklyn. 
                    </p>
                    <Link to='/register' className="btn btn-hero">login/register</Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};



export default Landing;
