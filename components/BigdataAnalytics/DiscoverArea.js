import React from "react";
import Link from "next/link";

const DiscoverArea = () => {
  return (
    <>
      <div className="discover-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="discover-image">
                <img
                  src="/images/bigdata-analytics/discover-img1.png"
                  alt="image"
                />
                <img
                  src="/images/bigdata-analytics/discover-img2.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="discover-content">
                <h2>The main goal of creating the platform is:</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <Link href="#" className="btn btn-primary">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-shape1">
          <img
            src="/images/bigdata-analytics/analytics-shape1.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default DiscoverArea;
