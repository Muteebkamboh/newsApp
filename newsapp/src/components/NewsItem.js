import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '92%', zIndex: 12 }}>
                    {source} 
                </span> 
                <img src={!imageUrl ? "https://www.ixbt.com/img/n1/news/2024/9/4/ixbtmedia_BYD_car_vs_Tesla_--v_6.1_e55ebb40-f4f8-42f3-ae2e-b7ed9b400e41_0_large.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span className="badge text-bg-info">Info</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown author" : author} | on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;