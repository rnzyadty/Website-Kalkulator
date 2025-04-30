function hitungTotal() {
    // Ambil data dari form
    let harga = parseInt(document.getElementById("menu").value);
    let jumlah = parseInt(document.getElementById("jumlah").value);
  
    // Validasi jumlah
    if (jumlah < 1) {
      alert("Jumlah porsi harus lebih dari 0!");
      return;
    }
  
    // Hitung total
    let total = harga * jumlah;
  
    // Tampilkan hasil
    document.getElementById("hasil").innerHTML =
      `🧾 Total Pembayaran: <strong>Rp ${total.toLocaleString("id-ID")}</strong>`;
  }
  