// Custom greeting based on time of day and user
const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;
    let user = "Aly & Erik" // update this when user is found from login

    if (hours < 12)
        greet = "Good Morning "
    else if (hours >= 12 && hours < 15)
        greet = "Good Afternoon "
    else if (hours > 15)
        greet = "Good Evening "
    return <span className="Heading">{greet}, {user}!</span>
}
export default Greetings;