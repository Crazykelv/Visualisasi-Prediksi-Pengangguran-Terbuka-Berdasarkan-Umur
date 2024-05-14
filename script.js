// Ini Data Pengangguran Bang
fetch('data.xlsx')
  .then((response) => response.arrayBuffer())
  .then((data) => {
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[5]; // Mengambil sheet pertama
    const sheet = workbook.Sheets[sheetName];
    const htmlTable = XLSX.utils.sheet_to_html(sheet);

    // Membuat elemen div untuk manipulasi DOM
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlTable;

    // Mengatur gaya sebaris pada tabel
    const table = tempDiv.querySelector('table');
    if (table) {
      table.style.border = "1px solid black"; // Border hitam pada tabel
      table.style.width = "100%"; // Lebar penuh
    }

    // Mengatur gaya sebaris pada semua baris
    const rows = tempDiv.querySelectorAll('tr');
    rows.forEach((row) => {
      row.style.borderBottom = "1px solid black"; // Border bawah hitam pada baris
    });

    // Mengatur gaya sebaris pada semua sel
    const cells = tempDiv.querySelectorAll('td, th');
    cells.forEach((cell) => {
      cell.style.border = "1px solid black"; // Border hitam pada sel
      cell.style.padding = "5px"; // Padding
    });

    // Memberi teks bold pada baris terakhir
    const boldRows = [0, 1, 2, 13]; // Indeks baris yang ingin kita buat bold

    boldRows.forEach((index) => {
      if (rows[index]) {
        rows[index].querySelectorAll('td, th').forEach((cell) => {
          cell.style.fontWeight = 'bold'; // Menjadikan teks tebal
        });
      }
    });    // Menyisipkan tabel yang sudah bergaya ke dalam DOM
    document.getElementById('DataPengangguran').innerHTML = tempDiv.innerHTML;
  })
  .catch((error) => console.error('Error fetching the file:', error));

    

// Ini Data Ramalan
fetch('data.xlsx')
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[6]; // Assuming first sheet
        const sheet = workbook.Sheets[sheetName];
        const htmlTable = XLSX.utils.sheet_to_html(sheet);

        // Membuat elemen div untuk manipulasi DOM
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlTable;

        // Mengatur gaya sebaris pada tabel
        const table = tempDiv.querySelector('table');
        if (table) {
        table.style.border = "1px solid black"; // Border hitam pada tabel
        table.style.width = "100%"; // Lebar penuh
        }

        // Mengatur gaya sebaris pada semua baris
        const rows = tempDiv.querySelectorAll('tr');
        rows.forEach((row) => {
        row.style.borderBottom = "1px solid black"; // Border bawah hitam pada baris
        });

        // Mengatur gaya sebaris pada semua sel
        const cells = tempDiv.querySelectorAll('td, th');
        cells.forEach((cell) => {
        cell.style.border = "1px solid black"; // Border hitam pada sel
        cell.style.padding = "5px"; // Padding
        });

        // Memberi teks bold pada baris terakhir
        const boldRows = [0, 1, 12]; // Indeks baris yang ingin kita buat bold

        boldRows.forEach((index) => {
        if (rows[index]) {
            rows[index].querySelectorAll('td, th').forEach((cell) => {
            cell.style.fontWeight = 'bold'; // Menjadikan teks tebal
            });
        }
        });
        document.getElementById('DataRamalan').innerHTML = tempDiv.innerHTML;

        })
        .catch(error => console.error('Error fetching the file:', error));


    // Curve
    const ctx = document.getElementById('chartPengangguran').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line', // Jenis grafik adalah garis
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'], // Label sumbu x
        datasets: [{
          label: 'Jumlah Pengangguran',
          data: [7410931, 7244905, 7560822, 7031775, 7040323, 7073385, 7104424, 9767754, 9102052, 8425931], // Data untuk sumbu y
          borderColor: 'rgba(113, 99, 186, 1)', // Warna garis
          borderWidth: 2, // Lebar garis
          fill: true, // Apakah area di bawah garis akan diisi warna
          tension: 0.2, // Memberikan kelengkungan pada garis
          pointBackgroundColor: 'rgba(113, 99, 186, 1)', // Warna titik pada garis
        }]

      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Sumbu y dimulai dari nol
          }
        }
      }
    });

    //CHART KEDUA
    const ctx2 = document.getElementById('chartRamalan').getContext('2d');

    const myChart2 = new Chart(ctx2, {
      type: 'line', // Jenis grafik adalah garis
      data: {
        labels: ['2022', 'Target', 'Target Prediksi', 'Prediksi'], // Label sumbu x
        datasets: [
          {
          label: 'Jumlah',
          data: [8425931, 3.42484, 3.42484, 8250899], // Data untuk sumbu y
          borderColor: 'rgba(255, 150, 124, 1)', // Warna garis
          borderWidth: 2, // Lebar garis
          fill: true, // Apakah area di bawah garis akan diisi warna
          tension: 0.4, // Memberikan kelengkungan pada garis
          pointBackgroundColor: 'rgba(255, 150, 124, 1)', // Warna titik pada garis
        },
      ]

      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Sumbu y dimulai dari nol
          }
        }
      }
    });