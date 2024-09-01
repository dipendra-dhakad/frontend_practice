
import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Pagination from './component/Pagination';


function App() {
  return (
    <div className="bg-blue-400 h-screen w-full  text-center items-center">
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  );
}

export default App;
