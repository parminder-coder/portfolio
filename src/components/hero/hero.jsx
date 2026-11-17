import "./hero.css"
export default function Hero({ imageURL }) {
    return (
        <div className="hero">
            <div className="bio">
                <h1> I'am Parminder Singh</h1>
                <p> A fullstack developer from Gurugram</p>
            </div>
            <img className="hero-img" src={imageURL} alt="" />
        </div>
    )
}