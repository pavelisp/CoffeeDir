import CoffeeList from "../components/CoffeeList/CoffeeList";

const Home = (props) => {
  return ( 
    <main>
    <CoffeeList coffees={props.coffees} />
  </main>
   );
}
 
export default Home;