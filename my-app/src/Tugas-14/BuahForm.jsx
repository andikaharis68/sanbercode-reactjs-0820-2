import React, { useContext } from "react";
import { BuahContext } from "./BuahContext";
import GetData from "./GetData";

const BuahForm = () => {
    let date = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
    const [dataBuah, setdataBuah, ID, setID] = useContext(BuahContext);

    const handleChange = (e) => {
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (ID === null) {
            let Data = {
                name: event.target.name.value,
                price: event.target.price.value,
                weight: Number(event.target.weight.value),
                created_at: date,
            };
            GetData.post(`fruits`, Data)
                .then((res) => {
                    setdataBuah([...dataBuah, res.data]);
                    setID(null);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            let Data = {
                name: event.target.name.value,
                price: event.target.price.value,
                weight: Number(event.target.weight.value),
                updated_at: date,
            };

            GetData.put(`fruits/${ID}`, Data).then((res) => {
                var newData = dataBuah.map((buah) => {
                    if (buah.id === ID) {
                        buah.name = res.data.name;
                        buah.price = res.data.price;
                        buah.weight = res.data.weight;
                        buah.updated_at = date;
                    }
                    return buah;
                });
                setdataBuah(newData);
                setID(null);
            });
        }
        document.getElementById("formbuah").reset();
        // var toast = document.getElementById("snackbar");
        // toast.className = "show";
        // setTimeout(() => {
        //   toast.className = toast.className.replace("show", "");
        // }, 1000);
    };

    return (
        <>
            <h1>Form Buah</h1>
            <form id="formbuah" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label-group">Nama Buah</label>
                    <input
                        className="group-control"
                        type="text"
                        name="name"
                        placeholder="nama buah"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label-group">Harga</label>
                    <input
                        className="group-control"
                        type="text"
                        name="price"
                        placeholder="mata uang rupiah"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="label-group">Berat(g)</label>
                    <input
                        className="group-control"
                        type="text"
                        name="weight"
                        placeholder="satuan gram"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button
                        style={{ padding: "2px 10px" }}
                        className="success"
                        type="submit"
                    >
                        Submit
          </button>
                </div>
            </form>
        </>
    );
};
export default BuahForm;