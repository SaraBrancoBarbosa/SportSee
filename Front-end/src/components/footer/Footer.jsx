import "./footer.css"

const iconMeditation = "/assets/icons/iconMeditation.svg"
const iconSwimming = "/assets/icons/iconSwimming.svg"
const iconCycling = "/assets/icons/iconCycling.svg"
const iconWeights = "/assets/icons/iconWeights.svg"

function Footer() {
    return (
        <footer className="footer">

            <div className="icons">
                <div className="icon">
                    <img src={iconMeditation} alt="Méditation" />
                </div>

                <div className="icon">
                    <img src={iconSwimming} alt="Natation" />
                </div>

                <div className="icon">
                    <img src={iconCycling} alt="Cyclisme" />
                </div>

                <div className="icon">
                    <img src={iconWeights} alt="Musculation" />
                </div>
            </div>

            <p className="copyright">Copyright, SportSee 2020</p>

        </footer>
    )
}

export default Footer