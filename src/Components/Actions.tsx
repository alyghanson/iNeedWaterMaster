import Action, { ActionProps } from "./Action";

//* Actions information list  TODO update paths to correct options
const ACTIONS: ActionProps[] = [{name: "Plant List", URL: "/plantlist"}, 
    {name: "Calendar", URL: "/calendar"},
]

const Actions = () => {
    return <div> {ACTIONS.map(action => <Action {...action} />)} </div>
}
export default Actions;