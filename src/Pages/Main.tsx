// Main App page
import Greetings from "../Components/Greeting";
import Actions from "../Components/Actions";
import Header from "../Components/Header";

function Main() {
  return (
    <div>
      <div><Header/></div>
        <Greetings/>
        <p>What would you like to do?</p>
        <Actions/>
    </div>
  );
}
export default Main;