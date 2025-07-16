function saveForm() {
  const data = Object.fromEntries(new FormData(document.getElementById('workScopeForm')));
  localStorage.setItem('workScopeData', JSON.stringify(data));
  alert("Form data saved locally.");
}

function loadForm() {
  const data = JSON.parse(localStorage.getItem('workScopeData'));
  if (!data) return;
  for (const [key, value] of Object.entries(data)) {
    const field = document.querySelector(`[name="${key}"]`);
    if (!field) continue;
    if (field.type === "checkbox") field.checked = true;
    else field.value = value;
  }
}

function clearForm() {
  localStorage.removeItem('workScopeData');
  document.getElementById('workScopeForm').reset();
}

function exportPDF() {
  window.print();
}

window.onload = loadForm;
