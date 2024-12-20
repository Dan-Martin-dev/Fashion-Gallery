import bridgeImage from '/home/vare/project/landings_1/Fashion Gallery/src/assets/images/bridge.webp'; // Import the image
import '/home/vare/project/landings_1/Fashion Gallery/src/styles/Home.css'

const Home = () => {
  return (

    /* Container */
    <div className=''>

      {/* Whitespace 1 */}
      <div className="w-screen h-[30vh]"></div>

      {/* Gallery */}
      <div className="gallery relative w-screen flex flex-col ">

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>01</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>02</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>03</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>04</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>05</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>06</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>07</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>08</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>09</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

        {/* Project */}
        <div className="project">
          <div className="index">
            <div className="mask">
              <h1>10</h1>
            </div>
          </div>

          {/* Images */}
          <div className="images"></div>
        </div>

      </div>

      {/* Whitespace 2 */}
      <div className="w-screen h-[45vh]"></div>

      {/* Project names */}
      <div className="project-names">

        <div className="indicator">
          <div className="symbol"></div>
        </div>

        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>

        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>

        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>
        <div className="name">
          <p>ATLAS STUDIO</p>
        </div>

      </div>

      {/* Image */}
      <div className="preview-img">
        <img className='w-72 h-72 object-cover' src={bridgeImage} alt="" />
      </div>

    </div>
  );
};

export default Home;
