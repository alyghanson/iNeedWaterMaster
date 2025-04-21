import Action, { ActionProps } from "./Action";

//* Actions information list  TODO update paths to correct options
<<<<<<< HEAD:src/Components/ToolbarMenuActions.tsx
const ACTIONS: ActionProps[] = [{name: "PlantList", URL: "/plantlist"}, 
    {name: "Calendar", URL: "/calandar"},
    ]
=======
const ACTIONS: ActionProps[] = [{name: "Plant List", URL: "/plantlist"}, 
    {name: "Calendar", URL: "/calendar"},
]
>>>>>>> develop:src/Components/Actions.tsx

const Actions = () => {
    return <div> {ACTIONS.map(action => <Action {...action} />)} </div>
}
export default Actions;