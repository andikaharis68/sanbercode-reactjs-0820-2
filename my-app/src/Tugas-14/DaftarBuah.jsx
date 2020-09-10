import React, { useContext, useEffect } from "react";
import GetData from "./GetData";
import { BuahContext } from "./BuahContext";

const DaftarBuah = () => {
    const [dataBuah, setdataBuah, , setID] = useContext(BuahContext);
    useEffect(() => {
        if (dataBuah === null) {
            GetData.get(`fruits`).then((res) => {
                setdataBuah(res.data);
            });
        }
    }, [dataBuah]);
    function deleteBuah(id) {
        var result = window.confirm("Yakin menghapus data?");
        if (result === true) {
            GetData.delete(`fruits/${id}`).then((res) => {
                let newdata = dataBuah.filter((x) => x.id !== id);
                setdataBuah(newdata);
            });
        }
    }
    function ubahBuah(id) {
        let edit = dataBuah.find((x) => x.id === id);
        let form = document.getElementById("formbuah");
        form.name.value = edit.name;
        form.price.value = edit.price;
        form.weight.value = edit.weight;
        setID(edit.id);
    }
    return (
        <>
            <h1>Table Harga Buah</h1>
            <table className="tables">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {dataBuah !== null &&
                        dataBuah.map((daftar, key) => {
                            var kgs = daftar.weight / 1000;
                            return (
                                <tr key={key}>
                                    <td>{daftar.name}</td>
                                    <td>{daftar.price}</td>
                                    <td>{kgs} kg</td>
                                    <td>
                                        <button
                                            className="warning"
                                            onClick={() => ubahBuah(daftar.id)}
                                        >
                                            edit
                    </button>
                                        <button
                                            className="danger"
                                            onClick={() => deleteBuah(daftar.id)}
                                        >
                                            delete
                    </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};
export default DaftarBuah;