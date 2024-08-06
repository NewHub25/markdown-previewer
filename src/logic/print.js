function printPartOfPage(elementId) {
  const content = document.getElementById(elementId).innerHTML;
  const printWindow = window.open('', '', 'height=600,width=800,popup=true');
  printWindow.document.write('<html><head><title>Impresión</title>');
  printWindow.document.write(
    '<style>img{max-width:100%}img.img_only_printed{width:0;height:0;visibility:hidden}</style >'
  );
  printWindow.document.write('</head><body >');
  printWindow.document.write(content);
  printWindow.document.write('<img src="" />');
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.onload = function () {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };
}
export default printPartOfPage;
