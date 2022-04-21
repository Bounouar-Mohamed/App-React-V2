import MaterialTable from 'material-table'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export interface Column2 {

  title: string;
  fields: { [key: string]: string };
  data: any

};

const TablesSneakers = (props: Column2) => {

  const handleSort = () => {

    console.log(props.title)

  }

  const columns = [

    { title: 'ID', field: 'users_id', width: 200 },
    { title: 'NAME', field: 'name', width: 200 },
    { title: 'DETAIL', field: 'sexe', width: 200 },
    { title: 'PRICE', field: 'price', width: 200 }

  ]

  const data = props.data


  return (

    <div>


      <MaterialTable

        style={{ height: 550, width: '90%', left: '5%', top: 100 }}
        columns={columns}
        data={data}
        title={"Sneakers"}
        actions={[
          {

            icon: () => <a onClick={() => console.log(data)} ><ShoppingCartIcon /> </a>,
            tooltip: "Ajouter au panier",
            onClick: (e, data) => {


              console.log(data);

            }
          }
        ]}
      />

    </div>

  )
}
export default TablesSneakers;
function fields(fields: any) {
  throw new Error('Function not implemented.');
}

