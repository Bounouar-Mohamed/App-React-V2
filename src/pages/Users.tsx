import GetUsers from "../Server/Get"



const UsersTable = () => {

    return(
        <header className="users-header">

         <div>
            <GetUsers/>
        </div>

        </header>
     
    )
}
export default UsersTable;