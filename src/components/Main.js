import React from 'react'

export default function Main(){
  return (
    <div className="track">
    <div className="track-heading">
      <h1>Tracks</h1>
    </div>
    <div className="about-track">
      <p className="middle-para">
        We’ll be suggesting the below four themes or impact areas to help
        spark your ideas. Remember that you’re welcome to build with the
        technologies of your choice, across any areas that you think would
        drive impact for these issues, so feel free to think outside the box
        too!
      </p>
    </div>
    <div className="items">
      <div className="item-content" id="item1">
        <div className="item-head">
        <h4>INCLUSIVITY</h4>
        <p>
          This track is a reminder of the beauty of inclusion and equality.
          Base your hacks on altering the social norms and build for the
          society on the lines of women empowerment, gender emancipation and
          societal justice.
        </p>
        </div>
        <img
          src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_1_nhwkro.png"
          alt="inclusivity icon"
          width="80%"
          className="inclusivity-icon"
        />
      </div>
      <div className="item-content" id="item2">
        <div className="item-head">
        <h4>COMMUNITY</h4>
        <p>
          This track serves to build for the community. Build for solving the
          problems of the society. Find solutions for the problems in
          healthcare, education etc. Each and every project that makes our
          lives better will adore this track.
        </p>
        </div>
        <img
          src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_121_2_dma5gh.png"
          alt="community icon"
          width="65%"
          className="community-icon"
        />
      </div>
      <div className="item-content" id="item3">
        <div className="item-head">
        <h4>SUSTAINABILITY</h4>
        <p>
          This track will seek to build projects that will make our lives more
          sustainable, including but not limited to teaching others how to
          ethically consume and creating greener technologies for the future.
        </p>
        </div>
        <img
          src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/plant_ukfeoq.png"
          alt="sustainability icon"
          width="50%"
          className="sustainability-icon"
        />
      </div>

      <div className="item-content" id="item4">
        <div className="item-head">
        <h4>OPEN INNOVITY</h4>
        <p>
          This track demands creativity. Don't feel afraid to think out of the
          box and bend the rules. Be innovative by taking inspiration from
          existing ideas and build something unique that aligns with your
          ideas. Like we did to the track name!
        </p>
        </div>
        <img
          src="https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Saly-43_n6atnu.png"
          alt="innovity icon"
          width="65%"
          className="innovity-icon"
        />
      </div>
    </div>
  </div>
  )
}


