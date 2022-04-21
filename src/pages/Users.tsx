import GetUsers from "../Services/GetUsers"
import GetSneakers from "../Services/getSneakers";
import PostSneakers from "../Services/PostSneakers";

const UsersTable = () => {

    return (
        <header className="users-header">

            <div>
                <GetUsers />
                <br />
                <PostSneakers/>
                <GetSneakers />
            </div>

        </header>

    )
}
export default UsersTable;