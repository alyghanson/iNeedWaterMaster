import "../Stylesheets/Greetings.css"
// Custom greeting based on time of day and user
const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;
    let user = "Aly & Erik" // update this when user is found from login

    if (hours < 12)
        greet = "Good morning "
    else if (hours >= 12 && hours < 15)
        greet = "It's a good afternoon, isn't it "
    else if (hours > 15)
        greet = "Good evening "
    return <span className="Heading">{greet}, {user}!</span>
}
export default Greetings;