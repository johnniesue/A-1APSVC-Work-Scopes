const sections = [
  "Company Overview",
  "Code of Conduct",
  "Daily Workflow & Job Setup",
  "Tools & Equipment",
  "Plumbing Service Procedures",
  "Safety Protocols",
  "Customer Communication",
  "Job Site Clean-Up & Exit Procedures",
  "Reporting, Invoicing & CRM Use",
  "Emergency Protocols",
  "FAQs",
  "Contact Information"
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("manual-container");
  sections.forEach(section => {
    const savedText = localStorage.getItem(section) || "";
    container.innerHTML += `
      <div class="card">
        <h2>${section}</h2>
        <textarea oninput="saveContent('${section}', this.value)">${savedText}</textarea>
      </div>
    `;
  });
});

function saveContent(key, value) {
  localStorage.setItem(key, value);
}

function printManual() {
  window.print();
}