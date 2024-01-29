var tanya = true;
while (tanya) {
    // tangkap pilihan player
    var p = prompt('Pilih salah satu : gajah, semut, orang');

    // tangkap pilihan computer dan tangkap bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // tentukan rules
    var hasil = ''
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang TIDAK SESUAI!';
    }

    // generate hasil
    alert('Kamu memilih : ' + p + '\n' + 'Komputer memilih : ' + comp + '\n' + 'Maka hasilnya : Kamu ' + hasil);

    tanya = confirm('Mau bermain lagi?');
} alert('Terima kasih sudah mau mencoba ahahaha');