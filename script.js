
fetch('data.xlsx')
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[5]; // Assuming first sheet
        const sheet = workbook.Sheets[sheetName];
        const htmlTable = XLSX.utils.sheet_to_html(sheet);

        document.getElementById('DataPengangguran').innerHTML = htmlTable;
    })
    .catch(error => console.error('Error fetching the file:', error));
