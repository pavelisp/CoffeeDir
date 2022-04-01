import './Wrapper.scss';

const Wrapper = (props) => {
  return ( 
    <div className="Wrapper">
      {props.children}
    </div>
   );
}
 
export default Wrapper;