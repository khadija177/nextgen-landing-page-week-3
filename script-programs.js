const programContainer = document.getElementById("programContainer");
const searchInput = document.getElementById("searchInput");

let programs = [];

// Fetch JSON
fetch("programs.json")
  .then(response => response.json())
  .then(data => {
    programs = data;
    displayPrograms(programs);
  });

// Display Cards
function displayPrograms(data) {

  programContainer.innerHTML = "";

  data.forEach(program => {

    let badges = "";

    program.skills.forEach(skill => {
      badges += `<span class="badge bg-primary me-1 mb-2">${skill}</span>`;
    });

    programContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow">
          <div class="card-body">

            <h4 class="card-title">${program.title}</h4>

            <p>${program.description}</p>

            <p><strong>Duration:</strong> ${program.duration}</p>

            <div class="mb-3">
              ${badges}
            </div>

            <a href="${program.apply}" class="btn btn-primary">
              Apply Now
            </a>

          </div>
        </div>
      </div>
    `;

  });

}

// Search
searchInput.addEventListener("input", function () {

  const value = searchInput.value.toLowerCase();

  const filtered = programs.filter(program => {

    const titleMatch = program.title.toLowerCase().includes(value);

    const skillMatch = program.skills.some(skill =>
      skill.toLowerCase().includes(value)
    );

    return titleMatch || skillMatch;

  });

  displayPrograms(filtered);

});