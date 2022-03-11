import GetUsers from "../Server/Get"
import GetSneakers from "../Server/getSneakers";


const UsersTable = () => {

    return(
        <header className="users-header">

         <div>
            <GetUsers/>
            <br/>
            <GetSneakers/>
        </div>

        </header>
     
    )
}
export default UsersTable;