import React from 'react';

class NamaBuah extends React.Component {
    render() {
        return <td>{this.props.nama}</td>;
    }
}

class HargaBuah extends React.Component {
    render() {
        return <td>{this.props.harga}</td>;
    }
}

class BeratBuah extends React.Component {
    render() {
        return <td>{this.props.berat}</td>
    }
}

class DaftarHargaBuah extends React.Component {
    render() {
        return (
            <div className="tabelBuah">
                <h1>Tabel Harga Buah</h1>
                <table>
                    <thead className="hargabuah-title">
                        <tr>
                            <th style={{ paddingLeft: "110px", paddingRight: "110px" }}>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>

                    {dataHargaBuah.map(el => {
                        return (
                            <tbody>
                                <NamaBuah nama={el.nama} />
                                <HargaBuah harga={el.harga} />
                                <BeratBuah berat={el.berat / 1000 + " kg"} />
                            </tbody>
                        )
                    })}

                </table>
            </div >
        )
    }
}

let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

export default DaftarHargaBuah;