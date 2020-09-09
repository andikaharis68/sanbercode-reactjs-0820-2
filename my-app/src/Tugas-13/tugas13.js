import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Tugas13() {
    const [dataHargaBuah, setDataHargaBuah] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [index, setIndex] = useState(null);
    const [selectedID, setSelectedID] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (dataHargaBuah.length === 0) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataHargaBuah(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [dataHargaBuah])

    const handleNama = (event) => {
        setName(event.target.value);
    }
    const handleHarga = (event) => {
        setPrice(parseInt(event.target.value));
    }
    const handleBerat = (event) => {
        setWeight(parseInt(event.target.value));
    }

    const clearText = () => {
        setName('');
        setPrice('');
        setWeight('');
        setSelectedID(null);
        setIsEdit(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isEdit) { //tambah      
            const dataBaru = {
                name: name,
                price: price,
                weight: weight
            };
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, dataBaru)
                .then(res => {
                    setDataHargaBuah([...dataHargaBuah, { id: res.data.id, name: name, price: price, weight: weight }])
                })
                .catch((err) => console.log(err));
            clearText();

        } else { //edit
            let dataBaru = {
                name: name,
                price: price,
                weight: weight
            };
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedID}`, dataBaru)
                .then(res => {
                    dataBaru = dataHargaBuah;
                    dataBaru[index].name = res.data.name;
                    dataBaru[index].price = res.data.price;
                    dataBaru[index].weight = res.data.weight;
                    setDataHargaBuah([...dataBaru])
                    clearText();
                    setIsEdit(false);
                })
                .catch((err) => console.log(err));
        }
    }
    const handleEdit = (event) => {
        setName(dataHargaBuah[event.target.id].name);
        setPrice(dataHargaBuah[event.target.id].price);
        setWeight(dataHargaBuah[event.target.id].weight);
        setSelectedID(parseInt(event.target.value));
        setIndex(event.target.id)
        setIsEdit(true);
    }

    const handleHapus = (event) => {
        let idBuah = parseInt(event.target.value);
        let dataBaru = dataHargaBuah.filter(({ id }) => id !== idBuah, 1);
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        setDataHargaBuah(dataBaru);
    }

    return (
        <>
            <div>
                <h1>Tabel Harga Buah</h1>

                <table style={{ border: "1px solid", width: "40%", margin: "0 auto" }}>
                    <thead style={{ background: "#aaa" }}>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: "coral" }}>
                        {dataHargaBuah.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td>{el.name}</td>
                                    <td>{el.price}</td>
                                    <td>{el.weight / 1000} kg</td>
                                    <td className="text-center">
                                        <button value={el.id} id={index} onClick={handleEdit}
                                            style={{ marginRight: "20px" }}>
                                            Edit
                                            </button>
                                        <button value={el.id} onClick={handleHapus}>
                                            Delete
                                            </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <br></br>
                <br></br>
                <div>
                    <form onSubmit={handleSubmit}>
                        <table style={{ border: "1px solid", width: "40%", margin: "auto" }}>
                            <tbody style={{ background: "#aaa" }}>
                                <tr>
                                    <td>
                                        <strong>Nama</strong>
                                    </td>
                                    <td>
                                        <input
                                            value={name}
                                            type="text"

                                            onChange={handleNama}
                                            required
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Harga</strong>
                                    </td>
                                    <td>
                                        <input
                                            value={price}
                                            type="number"

                                            onChange={handleHarga}
                                            required
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Berat</strong>
                                    </td>
                                    <td>
                                        <input
                                            value={weight}
                                            type="number"

                                            onChange={handleBerat}
                                            required
                                        ></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button type="submit">Save</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </>
    )
}