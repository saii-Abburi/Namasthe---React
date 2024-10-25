import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div className="about">
        <h1>Foodify's About</h1>

        <User />
        <UserClass  name = {"Naruto"} location = {"Hyderabad"}/>
        
    </div>
    )
};

export default About;