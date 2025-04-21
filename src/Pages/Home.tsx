// Main App page
import Greetings from "../Components/Greeting";
import Actions from "../Components/ToolbarMenuActions";

function Home() {
  return (
    <div>
        <Greetings/>
        <p>What would you like to do?</p>
        <Actions/>
    </div>
  );
}
export default Home;