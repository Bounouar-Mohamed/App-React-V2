import { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';
import TablesSneakers from '../Table/tablesSneakers';



export interface Getting2 {
    [x: string]: any;
    rows: any
}


const GetSneakers = () => {

    const [data, setData] = useState<Getting2[]>([]);



    useEffect(() => {

        axios.get<Getting2>("http://localhost:4000/sneakers")
            .then(resp => {
                setData(resp.data.rows)
                console.log("data fetched")
            })
            .catch(err => { console.log("erreur:", err) })
    }, []);





    const SortPrice = () => {

        let array: any[] = []

        for (let i = 0; i < data.length; i += 1) {

            let price = data[i].price

            array.push(
                parseInt(price)
            )
        }


        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < array.length; i += 1) {
                if (array[i - 1] > array[i]) {
                    done = false;
                    var tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;

                }
            }
        }

        return array;
    }



    const SortName = () => {

        let array: any[] = []

        for (let i = 0; i < data.length; i += 1) {

            let name = data[i].name

            array.push(
                name
            )
        }


        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < array.length; i += 1) {
                if (array[i - 1] > array[i]) {
                    done = false;
                    var tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;

                }
            }
        }

        return array;
    }



    const SortDetail = () => {

        let array: any[] = []

        for (let i = 0; i < data.length; i += 1) {

            let detail = data[i].sexe

            array.push(
                detail
            )
        }


        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < array.length; i += 1) {
                if (array[i - 1] > array[i]) {
                    done = false;
                    var tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;

                }
            }
        }

        return array;
    }




    function Shellsort() {


        let arr: any[] = []

        for (let i = 0; i < data.length; i += 1) {
            let price = data[i].price

            arr.push(
                price
            )
        }

        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

            for (let i = gap; i < n; i += 1) {

                let temp = arr[i];

                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                    arr[j] = arr[j - gap];

                arr[j] = temp;
            }
        }
        return arr;
    }


    return (
        <div className='sneakers'>

            <div className='sneakers-button1' >
                <button onClick={() => console.log(Shellsort())} > Sort Name  </button>
            </div>

            <div className='sneakers-button2'>
                <button onClick={() => console.log(SortDetail())} > Sort Detail  </button>
            </div>

            <div className='sneakers-button3'>
                <button onClick={() => console.log(SortPrice())} > Sort Price  </button>
            </div>

            <TablesSneakers data={data} title={''} fields={{}} />

        </div>
    )
}

export default GetSneakers;
