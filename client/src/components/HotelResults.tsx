import './App.css';

import HotelResult from "./HotelResult";

const HotelResults = (props: any) => {

  const {searchStatus, searchResults, switchToHotel} = props;

  if (searchStatus === "initialized") {
    return <div></div>;
  } else if (searchStatus === "in_flight") {
    return <div>Searching ...</div>;
  } else if (searchStatus === "completed") {
    return <div>
      <ul>
        {searchResults.map( (r: any) => <HotelResult key={r.id} hotel={r} switchToHotel={switchToHotel}/>)}
      </ul>
    </div>
  } else {
    return <div>Search errored!</div>;
  }
}

export default HotelResults
