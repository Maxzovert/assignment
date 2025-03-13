import React from 'react'
import one from '../../assets/FooterImg/1.png'
import two from '../../assets/FooterImg/2.png'
import three from '../../assets/FooterImg/3.png'
import four from '../../assets/FooterImg/4.png'
import five from '../../assets/FooterImg/5.png'
import g2Img from "../../assets/FooterImg/G2.png"
import insta from "../../assets/SocialIcon/insta.png"
import facebook from "../../assets/SocialIcon/facebook.png"
import twitter from "../../assets/SocialIcon/twitter.png"
import linkedin from "../../assets/SocialIcon/linkedin.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
    const SOCIAL_IMAGES = [
        { src: insta, alt: "Instagram" },
        { src: facebook, alt: "Facebook" },
        { src: twitter, alt: "Twitter" },
        { src: linkedin, alt: "LinkedIn" }
    ];
    return (
        <div className="mb-8">
            <div className="flex flex-row">
                <div className="flex flex-col h-auto border rounded-2xl mt-8 mx-2 sm:mx-10 md:mx-30 border-gray-300 ">
                    <div >
                        <div className="flex felx-col m-2">
                            <div className="ml-8">
                                <h1 className="mb-5 font-semibold">Product</h1>
                                <div>
                                    {["Webinar+", "Media+", "Generate Interest", "Capture Intent", "Prove Impact", "Repurpose Content"].map((item, index) => (
                                        <div className="text-[16px] m-2" key={index}>{item}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="ml-8">
                                <h1 className="mb-5 font-semibold">Where are you</h1>
                                <div>
                                    {["Demand Gen Marketer", "Content Marketer", "Event Market", "Field Marketer", "Marketing Op", "CMO"].map((item, index) => (
                                        <div className="text-[16px] m-2" key={index}>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="ml-8">
                                <h1 className="mb-5 font-semibold">Resources</h1>
                                <div>
                                    {["People who love us", "People who hate us", "Our Webinars", "Our Thoughts", "Help!"].map((item, index) => (
                                        <div className="text-[16px] m-2" key={index}>{item}</div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="ml-8">
                                    <h1 className="mb-5 font-semibold">About Us</h1>
                                    <div>
                                        {["Mission + Values", "The Head Honchos", "The Gossip", "OOur Contact Deets", "Join the team!"].map((item, index) => (
                                            <div className="text-[16px] m-2" key={index}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row m-5">
                            <img className="mx-4" src={one} alt="" height={100} width={100} />
                            <img className="mx-4" src={two} alt="" height={100} width={100} />
                            <img className="mx-4" src={three} alt="" height={100} width={100} />
                            <img className="mx-4" src={four} alt="" height={100} width={100} />
                            <img className="mx-4" src={five} alt="" height={100} width={100} />
                        </div>
                    </div>
                </div>


                <div className="">

                    {/* CONTACT */}
                    <div className="h-auto border rounded-2xl mt-8 sm:mx-10 md:mx-30 border-gray-300">
                        <div className="font-bold text-gray-600 mt-6 pt-4 pl-6">
                            Contact US
                        </div>
                        <p className="pl-7 text-sm mt-1 text-gray-500">to see what Webinar+ can do </p>
                        <p className="pl-7 text-sm mt-1 text-gray-500">for your business</p>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="email" placeholder="Email" className="m-4" />
                            <Button type="submit">{<div className="h-8 w-8 text-white rounded-full bg-slate-600  text-center p-1">{`>`}</div>}</Button>
                        </div>
                    </div>


                    {/*READ VIEW*/}
                    <div className="h-auto border rounded-2xl mt-4 mx-2 sm:mx-10 md:mx-30 border-gray-300 flex items-center justify-center relative overflow-hidden">
                        <img src={g2Img} alt="G2" height={50} width={50} className="ml-28 mb-3 absolute inset-0 mt-6 object-cover opacity-40" />
                        <div className="p-1 m-10 rounded-full text-[12px] bg-transparent border border-gray-300 text-center relative z-10">
                            Read our reviews on G2.com
                        </div>
                    </div>

                    <div className="mt-4 mx-2 sm:mx-10 md:mx-30 flex felx-col w-90 justify-between">
                        {SOCIAL_IMAGES.map((image, index) => (
                            <div className="border border-gray-300 h-18 w-18 rounded-2xl flex items-center justify-center">
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-8 w-8 "
                                />
                            </div>

                        ))}
                    </div>
                </div>
            </div>






            {/* Footor bottom*/}
            <div className="h-22 bg-white border rounded-2xl mt-8 mx-6 sm:mx-10 md:mx-30 border-gray-300 flex justify-around ">
                <div className="flex items-center">
                    <div>
                        <p style={{
                            color: "#333132",
                            fontSize: "16px"
                        }} className="font-semibold">© 2022 Hubilo. All rights reserved</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end">
                    {["Term Of Use", "Privacy Policy", "Sercurity and Compliance", "Cookie Policy"].map((item, index) => (
                        <div className="text-sm text-black ml-12" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Footer
