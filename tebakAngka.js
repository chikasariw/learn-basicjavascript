var tanya = true;
while(tanya){
    alert('Selamat datang di permainan Tebak Angka!' + '\n' + 'Silahkan menebak angka dari 1 sampai 10' + '\n' + '*kamu memiliki 3 kali kesempatan');

    // tangkap angka random 1 - 10
    var angkaRandom = Math.floor(Math.random() * 10) + 1;
    
    console.log(angkaRandom);
    var chance = 3;
    
    while (chance >= 1) {
        // tangkap angka tebakan player
        var p = parseInt(prompt('Masukkan angka tebakan Anda:'));
    
        // menentukan rules
        if (p === angkaRandom) {
            alert('Anda BENAR! Angka yang Anda tebak adalah ' + angkaRandom);
            break;
        } else if (p < angkaRandom) {
            alert('Angka yang Anda tebak terlalu RENDAH! \n Tersisa ' + (chance - 1) + ' kesempatan lagi.');
        }else if (p > 10) {
            alert('Angka yang Anda melebihi angka 10. \n Tersisa ' + (chance - 1) + ' kesempatan lagi.');
        } else if (p > angkaRandom) {
            alert('Angka yang Anda tebak terlalu TINGGI! \n Tersisa ' + (chance - 1) + ' kesempatan lagi.');
        } else {
            alert('Yang Anda masukkan bukan Angka! \n Tersisa ' + (chance - 1) + ' kesempatan lagi.');
        } 
        chance -= 1;
    }
    
    if (chance === 0) {
        alert('Anda gagal menebak angkanya \n'+ 'Angka tebakannya adalah : ' + angkaRandom);
    }

    tanya = confirm('Mau bermain lagi?');
} alert('Terima kasih sudah mau bermain Tebak Angka hihi');
