// Main App page
import Greetings from "../Components/Greeting";
import Actions from "../Components/Actions";

function Main() {
  return (
    <div>
        <Greetings/>
        <p>What would you like to do?</p>
        <Actions/>
    </div>
  );
}
export default Main;