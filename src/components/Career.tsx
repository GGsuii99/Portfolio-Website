import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chief executive officer and founder</h4>
                <h5>Ethem's supermarket uk</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              A very good supermarket. Sells nothing because I need to buy <a href="https://e.uk"></a> to get started
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>The gamer at the back of the shop on the spare PC</h4>
                <h5>Karadeniz Kitap Kirtasiye</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              A very good stationery shop. 
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
