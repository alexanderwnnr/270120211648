import './App.css';
import ProfileHeader from '../profileHeader/profileHeader'
import ServiceBlock from '../serviceBlock/serviceBlock'
import ReviewList from '../reviewList/reviewList'

function App() {
  return (
    <div className="App">
      <ProfileHeader />
      <ServiceBlock />
      <ReviewList />
    </div>
  );
}

export default App;
