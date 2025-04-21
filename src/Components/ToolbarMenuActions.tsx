import Action, { ActionProps } from "./Action";

//* Actions information list  TODO update paths to correct options
const ACTIONS: ActionProps[] = [{name: "PlantList", URL: "/plantlist"}, 
    {name: "Calendar", URL: "/calandar"},
    ]

const Actions = () => {
    return <div> {ACTIONS.map(action => <Action {...action} />)} </div>
}
export default Actions;