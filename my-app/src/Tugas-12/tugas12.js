import React, { Component } from "react";

class FormBuah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 },
            ],
            inputNama: "",
            inputHarga: null,
            inputBerat: null,
            index: -1,  // untuk memambahkan data di baris baru
        };
    }

    //----------------------------- ketika tombol save ditekan -----------------------------
    submitForm = (event) => {
        event.preventDefault(); //agar tidak default sendiri
        var index = this.state.index;
        var inputAll = {    //mengambil nilai dari form input (nama,harga,berat)
            nama: this.state.inputNama,
            harga: this.state.inputHarga,
            berat: this.state.inputBerat,
        };
        if (index === -1) { //artinya bukan dari tombol edit, maka membuat baris baru
            this.setState({
                dataBuah: [...this.state.dataBuah, inputAll],
            });
        } else { //dari tombol edit, akan mengganti data yg sudah ada
            var updateDataBuah = this.state.dataBuah;
            updateDataBuah[index] = inputAll;
            this.setState({
                dataBuah: [...updateDataBuah],
            });
        }
        this.setState({ //menghilangkan bekas tulisan di <input>
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: -1,
        });
        inputAll = {};
    }
    //--------------------------------------------------------------------------------------

    //----------------------- saat mengisi form nama, harga,  dan berat  -------------------
    changeInputName = (event) => {
        var value = event.target.value;  //mengambil nilai dari <input>
        this.setState({ inputNama: value }); //memasukan nilainya ke variable
    };
    changeInputHarga = (event) => {
        var value = event.target.value;
        this.setState({ inputHarga: value });
    };
    changeInputBerat = (event) => {
        var value = event.target.value;
        this.setState({ inputBerat: value });
    };
    //-------------------------------------------------------------------------------------

    //--------------------------- saat menekan tombol edit --------------------------------
    editForm = (event) => {
        var index = event.target.value;
        var dataBuah = this.state.dataBuah[index];  //agar data muncul di form
        this.setState({
            inputNama: dataBuah.nama,
            inputHarga: dataBuah.harga,
            inputBerat: dataBuah.berat,
            index: index,
        });
    };
    //-------------------------------------------------------------------------------------

    //-------------------------- saat menekan tombol delete -------------------------------
    deleteBuah = (event) => {
        var index = event.target.value;
        var updateDataBuah = this.state.dataBuah;
        updateDataBuah.splice(index, 1);
        this.setState({
            index: -1,
        });
    }
    //-------------------------------------------------------------------------------------

    render() {
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
                            {this.state.dataBuah.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{el.nama}</td>
                                        <td>{el.harga}</td>
                                        <td>{el.berat / 1000} kg</td>
                                        <td className="text-center">
                                            <button value={index}
                                                onClick={this.editForm}
                                                style={{ marginRight: "20px" }}
                                            >
                                                Edit
                                            </button>
                                            <button value={index} onClick={this.deleteBuah}>
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
                        <form onSubmit={this.submitForm}>
                            <table style={{ border: "1px solid", width: "40%", margin: "auto" }}>
                                <tbody style={{ background: "#aaa" }}>
                                    <tr>
                                        <td>
                                            <strong>Nama</strong>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={this.state.inputNama}
                                                onChange={this.changeInputName}
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
                                                type="number"
                                                value={this.state.inputHarga}
                                                onChange={this.changeInputHarga}
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
                                                type="number"
                                                value={this.state.inputBerat}
                                                onChange={this.changeInputBerat}
                                                required
                                            ></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <button>Save</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
export default FormBuah;