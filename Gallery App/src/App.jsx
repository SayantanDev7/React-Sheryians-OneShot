import GalleryHeader from './components/GalleryHeader'
import PhotoCard from './components/PhotoCard'
import axios from 'axios'
import { useEffect,useState} from 'react'
const App = () => {

  const [data,setData] = useState([]);
  const[currpage,setCurrpage] = useState(1);
  const getdata = async () =>{
    const info = await axios.get(`https://picsum.photos/v2/list?page=${currpage}&limit=10`)
    setData((prevdata) =>{
      return [...prevdata, ...info.data] //instead of completely replacing data it adds new data to the previous data
    });
  }
  useEffect(() =>{
    getdata();
  }, [currpage]) //mounts data when currpage changes
  return (
    <>
    <GalleryHeader />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        /* 
          BUG FIXED:
          - WHERE: Previously, this line was passing `title={item.title}`.
          - WHY: The Lorem Picsum API response does NOT contain a 'title' field. Instead, the photographer's name is stored in the 'author' field.
          - HOW FIXED: Replaced `item.title` with `item.author` so that the photographer's name is successfully displayed on the card.
        */
        <PhotoCard key={item.id} title={item.author} url={item.download_url} id={item.id} />
      ))/* End of mapped data */}
    </div>
    <button onClick={() => setCurrpage(currpage + 1)} className="text-white bg-purple-500 hover:bg-purple-700 transition-colors duration-300 ease-in-out font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex justify-center items-center"
    >Load More</button>
    </>
  )
}

export default App