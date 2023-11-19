import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>A Lovely List of Doggos</h1>
            <div>
                {dogs.map(dog => (
                    <div key={dog.src}>
                        <img src={dog.src} alt={dog.name}></img>
                        <h3>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link> 
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;