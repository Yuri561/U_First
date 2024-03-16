import react from "react";
import "./vendors.css";

const Vendors = () => {
    return(
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter vendor-container">
                <img className="vendors-img" src="carrier-enterprise.png" alt="vendors" />
                <img className="vendors-img" src="trane.png" alt="vendors" />
                <img className="vendors-img" src="uri.png" alt="vendors" />
                <img className="vendors-img" src="jhonson.png" alt="vendors" />
                <img className="vendors-img" src="electric.png" alt="vendors" />
                <img className="vendors-img" src="grain.png" alt="vendors" />
            </div>
    
        </section>
    )
}

export default Vendors;