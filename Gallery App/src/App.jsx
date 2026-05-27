import GalleryHeader from './components/GalleryHeader'
import PhotoCard from './components/PhotoCard'
import axios from 'axios'
import { useEffect,useState} from 'react'
const App = () => {

  const [data,setData] = useState([]);
  const getdata = async () =>{
    const info = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setData(info.data);
  }
  useEffect(() =>{
    getdata();
  }, [])
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
    </>
  )
}

export default App