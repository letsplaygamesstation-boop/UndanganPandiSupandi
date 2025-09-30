// --- JavaScript (script.js) ---

function salinRekening() {
    // Ambil teks dari elemen dengan ID "nomorRekening"
    const rekening = document.getElementById("nomorRekening").innerText;
    
    // 1. Buat elemen teks sementara (input field)
    const tempInput = document.createElement("input");
    tempInput.value = rekening;
    document.body.appendChild(tempInput);
    
    // 2. Pilih dan salin teks
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Untuk perangkat seluler
    document.execCommand("copy");
    
    // 3. Hapus elemen sementara
    document.body.removeChild(tempInput);
    
    // 4. Berikan notifikasi ke pengguna
    alert("Nomor rekening " + rekening + " berhasil disalin!");
}
