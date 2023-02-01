import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChannelDetail from './component/ChannelDetail';
import Feed from './component/Feed';
import Navbar from './component/Navbar';
import SearchFeed from './component/SearchFeed';
import VideoDetail from './component/VideoDetail';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Router>
);

export default App;
