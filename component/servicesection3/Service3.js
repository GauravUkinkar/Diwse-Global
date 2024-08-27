import React from 'react'
import './service3.scss';

function Service3() {

    const list = [
        {
            title: "Search Engine Optimization",
            content:
                "Boost your search rankings with our SEO expertise in keyword research, on-page optimization, and quality backlinks.",
        },
        {
            title: "Content Marketing",
            content:
                "Engage your audience with impactful content, including blogs, infographics, and videos that build brand authority.",
        },
        {
            title: "Social Media Management",
            content:
                "Elevate your social media presence with tailored posts and targeted ads on platforms like Facebook, Instagram, and LinkedIn.",
        },
    ];

    return (
        <>
        {/* -------service-top-section------ */}
            <div className="service-top-section parent">
                <div className="service-top-cont bg-img-cover cont">
                </div>
            </div>
              {/* -------service-bottom-section------ */}
            <div className="service-bottom-section parent bg-img-cover">
                <div className="service-bottom-cont  cont">
                    {list.map((item) => (
                        <div className="service-bottom-card">
                            <div className="card-img-box bg-img-cover"></div>
                            <div className="service-card-content">
                                <h3 className='service-card-title'>{item.title}</h3>
                                <p>{item.content} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service3