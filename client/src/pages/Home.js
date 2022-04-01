import CoffeeList from "../components/CoffeeList/CoffeeList";
import './Home.scss';

const Home = (props) => {
  return ( 
    <main className="Main">
      <CoffeeList coffees={props.coffees} />
    </main>
   );
}
 
export default Home;