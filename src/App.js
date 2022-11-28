import './App.css';
import { GroceryList } from './GroceruList';
import image from './photo.jpg'
import imageTwo from './photo2.jpg'

function App() {
  return (
    <div className='app'> 
    <img src={image} width='250px' alt='shopping'/>
    <h1>Shopping List</h1>
    <GroceryList />
    <img src={imageTwo} width='250px' alt='shopping main'/>
    </div>
  );
}

export default App;