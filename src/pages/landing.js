import React, { useEffect } from "react";
import './landing.css';


//<-----Map section starts----->

function LandingPage() {
  useEffect(() => {
    function initMap() {
      var options = {
        zoom: 8,
        center: { lat: 31.1471 , lng: 75.3412 }
      };
      var map = new window.google.maps.Map(document.getElementById('map'), options);

      var marker = new window.google.maps.Marker({
        position: {lat:30.9661 , lng: 76.5231 },
        map : map
      });

      var infoWindow = new window.google.maps.InfoWindow({
        content : '<h1>My Home :)</h1>'
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      })
    }

    const loadMapScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = initMap; // Call initMap when script is loaded
        document.head.appendChild(script);
      } else {
        initMap(); // Google Maps API already loaded, directly call initMap
      }
    };

    loadMapScript();

    return () => {
      // Cleanup function if needed
    };
  }, []);


  const handleClick = () => {
    // Navigate to the specified URL when the button is clicked
    window.location.href = '/chatroom';
  };

  //<-----Map setion ends----->

  return (
    <div className="LandingPage">

    <div className="Group8" />

    <div className="Rectangle7">
      <div
        className="Map"
        id="map"
      />
    </div>
    <div className="Rectangle8">
      <div className="Group22">
        <div className="CrimeRateIndexingGradient">
          Crime rate indexing gradient
        </div>
        <br />
        <div className="Rectangle9" />
        <div className="Group10">
          <div className="Low">
            Low
          </div>
          <div className="High">
            High
          </div>
        </div>
      </div>
    </div>
    <div className="Rectangle10">
      <br />
      <div className="Group20">
        <div className="Rectangle11">
          <div className="ReportSummary">
            Report Summary
          </div>
        </div>
        <div className="ContainedDefault">
          <div className="comments">
            <p>
              Detailed crime report
            </p>
          </div>

        </div>

        <div className="Group15">
          <button
            className="button1 link-button"
            type="button"
            onClick={() => window.location.href = '/chatroom'}
          >
            Join discussion room
          </button>
          <button
            className="button2"
            type="button"
            onClick={() => window.location.href = '/reportcrime'}
          >
            Report a crime

          </button>
        </div>

      </div>
    </div>
  </div>
  );
}

export default LandingPage;
