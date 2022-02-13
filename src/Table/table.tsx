import MaterialTable from 'material-table'


export interface Column {
  
  title: string;
  fields: { [key: string]: string };
  data:any

} ;

const Tables = (props:Column) => {


  const columns = [

    {title: 'ID', field: 'users_id', width: 200},
    {title: 'NOMS', field: 'nom', width: 200},
    {title: 'PRENOMS', field: 'prenom', width: 200},
    {title: 'EMAILS', field: 'email', width: 200},
    {title: 'PASSWORDS', field: 'password', width: 200}
  
  ]
  
const data = props.data 

  return (

      <div>

       <MaterialTable

          style={{height: 400, width: '90%', left: '5%', top: 100}}
          columns={columns}
          data={data}
          title={"Users Data"}
         />

     </div>
    
  )}
export default Tables;
