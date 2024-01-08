import React from 'react'
import "../../style/testimonial.css";
import ava01 from "../../images/ava-1.jpg"
import Slider from 'react-slick';
import ava02 from "../../images/ava-2.jpg"
import ava03 from "../../images/ava-3.jpg"

const Testimonial = () => {

    const settings = {
        dots:false,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        slideToShow:1,
        slideToscroll:1,
        swipeToSlide:true,
    }

    const sliderData = [
        {
            desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis in veniam inventore minima exercitationem at quibusdam corporis iusto et nisi dolorem deserunt unde sequi id voluptatum sapiente, nostrum distinctio laudantium sint. Earum dolorem repudiandae quod laudantium, quia sapiente at.",
            imgUrl : ava01,
            cname:"Sahil Dholariya",
            ndesc: "CEO, Workcreation"
        },
        {
            desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis in veniam inventore minima exercitationem at quibusdam corporis iusto et nisi dolorem deserunt unde sequi id voluptatum sapiente, nostrum distinctio laudantium sint. Earum dolorem repudiandae quod laudantium, quia sapiente at.",
            imgUrl : ava02,
            cname:"Mrs K.V.C",
            ndesc: "CEO, Workcreation"
        },
        {
            desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis in veniam inventore minima exercitationem at quibusdam corporis iusto et nisi dolorem deserunt unde sequi id voluptatum sapiente, nostrum distinctio laudantium sint. Earum dolorem repudiandae quod laudantium, quia sapiente at.",
            imgUrl : ava03,
            cname:"Raju",
            ndesc: "CEO, Workcreation"
        }
    ]
    return (
        <>
            <section>
                <div className="container">
                    <div className="slider__content-top">
                        <h6 className="subtitle">Testimonials</h6>
                        <h2>trusted by more than {" "}<span className="highlight">500 customers</span> </h2>
                    </div>

                    <div className="slider__wrapper">
                        <Slider {...settings}>
                            {
                                sliderData.map((item,index)=>(
                                    <div className="slider__item" key={index}>
                                    <p className="description">
                                        {item.desc}
                                    </p>
        
                                    <div className="customer__details">
                                        <div className="customer__img">
                                            <img src={item.imgUrl} alt="" />
                                        </div>
        
                                        <div>
                                            <h5 className="customer__name">{item.cname}</h5>
                                            <p className="description">{item.ndesc}</p>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
