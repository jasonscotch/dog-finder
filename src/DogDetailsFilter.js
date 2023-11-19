import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

const DogDetailsFilter = ({dogs}) => {
  const {name} = useParams();

  if (name) {
    const selectedDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={selectedDog} />;
  }
  
  return null;
}

export default DogDetailsFilter;