import Action, { ActionProps } from "./Action";

//* Actions information list  TODO update paths to correct options
const ACTIONS: ActionProps[] = [{name: "Edit", URL: "/"}, 
    {name: "How it Works", URL: "/About"},
    {name: "My Settings", URL: "/"}]

const Actions = () => {
    return <div> {ACTIONS.map(action => <Action {...action} />)} </div>
}
export default Actions;