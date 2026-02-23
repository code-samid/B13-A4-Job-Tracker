let interviewList = [];
let rejectedList = [];

let totalNumber = document.querySelectorAll('.total')[0];
let totalJobs = document.querySelectorAll('.total')[1];
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardsDiv = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const emptyState = document.getElementById('emptyState');

let currentFilter = "all";

function calculateCount() {
    const cards = document.querySelectorAll('#allCards section');

    totalNumber.innerText = cards.length;
    totalJobs.innerText = cards.length + " jobs";
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500','text-white');
    interviewFilterBtn.classList.remove('bg-blue-500','text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white');

    allFilterBtn.classList.add('bg-white');
    interviewFilterBtn.classList.add('bg-white');
    rejectedFilterBtn.classList.add('bg-white');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500','text-white');
}

//FILTER FUNCTION
function filterJobs(type) {
    currentFilter = type;

    const cards = document.querySelectorAll('#allCards section');
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.dataset.status;

        if (type === "all" || status === type) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    emptyState.classList.toggle("hidden", visibleCount !== 0);
}

// filter button clicks
allFilterBtn.onclick = () => { toggleStyle('all-filter-btn'); filterJobs("all"); };
interviewFilterBtn.onclick = () => { toggleStyle('interview-filter-btn'); filterJobs("interview"); };
rejectedFilterBtn.onclick = () => { toggleStyle('rejected-filter-btn'); filterJobs("rejected"); };


// MAIN CLICK HANDLER
mainContainer.addEventListener('click', function(event) {
    const card = event.target.closest('section');
    if (!card) return;

    // INTERVIEW CLICK
    if (event.target.classList.contains('interview-btn')) {

        if (card.dataset.status === "interview") {
            card.dataset.status = "all";
            interviewList = interviewList.filter(c => c !== card);
        } else {
            card.dataset.status = "interview";
            interviewList.push(card);
            rejectedList = rejectedList.filter(c => c !== card);
        }

        calculateCount();
        filterJobs(currentFilter);
    }

    // REJECTED CLICK
    if (event.target.classList.contains('rejected-btn')) {

        if (card.dataset.status === "rejected") {
            card.dataset.status = "all";
            rejectedList = rejectedList.filter(c => c !== card);
        } else {
            card.dataset.status = "rejected";
            rejectedList.push(card);
            interviewList = interviewList.filter(c => c !== card);
        }

        calculateCount();
        filterJobs(currentFilter);
    }

    // DELETE CLICK
    if (event.target.classList.contains('delete-btn')) {
        if (card.dataset.status === "interview") {
            interviewList = interviewList.filter(c => c !== card);
        }
        if (card.dataset.status === "rejected") {
            rejectedList = rejectedList.filter(c => c !== card);
        }

        card.remove();
        calculateCount();
        filterJobs(currentFilter);
    }
});