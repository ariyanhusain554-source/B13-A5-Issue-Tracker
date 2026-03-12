
//        {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },


const issuesContainer = document.getElementById("issuesContainer");

const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

let allIssues = [];

const removeActive = () => {
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach((btn) => btn.classList.remove("active"));
};


issuesContainer.addEventListener("click", function()){
     if (target.id === "allBtn") {

     async function loadIssues() {
     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
     const data = await res.json();
     allIssues = data.data; 
     displayIssues(allIssues);
}

  loadIssues();

}

}

function displayIssues(issues) {

  issuesContainer.innerHTML = "";

  issues.forEach(issue => {

    const div = document.createElement("div");

    div.className = "card bg-[#ffffff]  w-96 shadow-sm";

    div.innerHTML = `
            <div class="card-body">

        <div class="flex justify-between items-center">
        <span class="text-sm ${
          issue.status === "open" ? "text-green-600" : "text-red-500"
        }">
          ${issue.status}
        </span> 
            <div class="badge badge-outline">${issue.priority}</div>
        </div>


          <h2 class="card-title font-bold text-2xl text-black"> ${issue.title}
        </h2>
        <p class="text-[#64748B]">${issue.description}</p>
        
        <div>
            <div class="badge badge-outline">${issue.labels[0]}</div>
            <div class="badge badge-outline">${issue.labels[1]}</div>
        </div>
        <hr>
       <div class="text-[#64748B]">
        <p>#1 by <span>${issue.author}</span></p>
        <p>${issue.createdAt}</p>
       </div>

       </div>
    `;

    issuesContainer.appendChild(div);
  });

}

