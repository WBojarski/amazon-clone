import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/launch/THEBOYSS2/CTATEST/THBY_S2_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB404774151_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        key="11111"
                        id="11111"
                        title="Gritin Skipping Rope, Speed Jump Rope Soft Memory Foam Handle Tangle-free Adjustable Rope & Rapid Ball Bearings Fitness Workouts Fat Burning Exercises Boxing - Spare Rope Length Adjuster Included."
                        image="https://m.media-amazon.com/images/I/71ChLY+tLcL._AC._SR360,460.jpg"
                        price={8.99}
                        rating={4}
                    />
                    <Product
                        key="11112"
                        id="11112"
                        title="Bluetooth 5.0 Wireless Headphones, moosen IPX7 Waterproof 27H Playtime AAC 8.0 CVC 8.0 True Wireless Earphones Earbuds with Hi-Fi Deep Bass 3D Stereo Sound, Touch Control & Charging Case"
                        image="https://m.media-amazon.com/images/I/41YokS+9tgL._AC_SY240_.jpg"
                        price={24.99}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key="11113"
                        id="11113"
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                        image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_UY218_.jpg"
                        price={19.99}
                        rating={2}
                    />
                    <Product
                        key="11116"
                        id="11116"
                        title="SanDisk Ultra 32 GB microSDHC Memory Card + SD Adapter with A1 App Performance Up to 98 MB/s, Class 10, U1"
                        image="https://images-eu.ssl-images-amazon.com/images/I/414KF0pyZjL._AC_SY200_.jpg"
                        price={8.99}
                        rating={5}
                    />
                    <Product
                        key="11114"
                        id="11114"
                        title="HP X4D37AE 302 Original Ink Cartridges, Black and Tri-Colour, Multipack"
                        image="https://images-eu.ssl-images-amazon.com/images/I/41cHXtW+vHL._AC_SY200_.jpg"
                        price={19.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key="11115"
                        id="11115"
                        title="LG Ultrawide 34WL75C-B 34-Inch Curved Monitor- 21: 9 QHD 3440x1440"
                        image="https://m.media-amazon.com/images/I/71LE7yvT9fL._AC_UY218_.jpg"
                        price={549.99}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
