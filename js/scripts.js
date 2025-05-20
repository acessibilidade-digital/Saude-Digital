document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(detail => {
    detail.open = true;  // Abre o <details>
  });
});

document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(detail => {
    detail.open = false;  // Fecha o <details>
  });
});