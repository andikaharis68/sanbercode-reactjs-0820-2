import React from 'react';
import './App.css';

function App() {
  return (
    <form className="formPembelian">
      <h1 className="text-center">Form Pembelian Buah</h1>
      <table>
        <tr>
          <th>
            <label for="nama">Nama Pelanggan</label>
          </th>
          <td className="input">
            <input type="text" id="nama" name="nama" />
          </td>
        </tr>
        <tr >
          <th className="daftarItem">Daftar Item</th>
          <td className="input">
            <input type="checkbox" name="semangka" id="semangka" value="semangka" />
            <label for="semangka"> Semangka</label><br />
            <input type="checkbox" name="jeruk" id="jeruk" value="jeruk" />
            <label for="jeruk"> Jeruk</label><br />
            <input type="checkbox" name="nanas" id="nanas" value="nanas" />
            <label for="nanas"> Nanas</label><br />
            <input type="checkbox" name="salak" id="salak" value="salak" />
            <label for="salak"> Salak</label><br />
            <input type="checkbox" name="anggur" id="anggur" value="anggur" />
            <label for="anggur"> Anggur</label><br />
          </td>
        </tr>
      </table>
      <input type="submit" value="Kirim" id="submitButton" />
    </form>
  );
}

export default App;