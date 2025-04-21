// import "../Stylesheets/Action.sass"

/**Action card props */
export interface ActionProps {
    /**Name -> words to be displayed on action card */
    name: string;
    /**Path to page when clicked */
    URL: string;
}

// Defines the actions and what they contain
const Action = ({name, URL}: ActionProps) => {
return <div><a href={URL}>{name}</a></div>
}

export default Action;