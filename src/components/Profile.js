import React from "react";

const Profile = () => {
  return (
    <div className="flex-container">
      <div>
        <img
          src="https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="logo"
        />
        <div>
          <h4>Build perfect websites</h4>
          <h3>Unlimited power and customization possibilities</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum is simply dummy text.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1648737966326-eb0770cec304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="logo"
        />
        <div>
          <h4>Unique digital experiences</h4>
          <h3>Pixel perfect design and clear code delivered to you</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum has been the industry's standard dummy text
            ever since. Lorem Ipsum is simply dummy text.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
