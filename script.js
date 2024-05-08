// Ini Data Pengangguran Bang
fetch('data.xlsx')
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array', borderWidth: 2 });
        const sheetName = workbook.SheetNames[5]; // Assuming first sheet
        const sheet = workbook.Sheets[sheetName];
        const htmlTable = XLSX.utils.sheet_to_html(sheet);

        document.getElementById('DataPengangguran').innerHTML = htmlTable;
    })
    .catch(error => console.error('Error fetching the file:', error));

    

// Ini Data Ramalan
    fetch('data.xlsx')
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[6]; // Assuming first sheet
        const sheet = workbook.Sheets[sheetName];
        const htmlTable = XLSX.utils.sheet_to_html(sheet);

        document.getElementById('DataRamalan').innerHTML = htmlTable;
    })
    .catch(error => console.error('Error fetching the file:', error));


    // Curve
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line', // Jenis grafik adalah garis
      data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'], // Label sumbu x
        datasets: [{
          label: 'Kurva Pengangguran',
          data: [65, 59, 80, 81, 56, 55, 40], // Data untuk sumbu y
          borderColor: 'rgba(113, 99, 186, 1)', // Warna garis
          borderWidth: 2, // Lebar garis
          fill: false, // Apakah area di bawah garis akan diisi warna
          tension: 0.4, // Memberikan kelengkungan pada garis
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