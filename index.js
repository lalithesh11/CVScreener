console.log("This is index.js");

const data = [
  {
    name: "Dhoni",
    age: 37,
    city: "Ranchi",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Kohli",
    age: 32,
    city: "Delhi",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Kajal",
    age: 29,
    city: "Mumbai",
    language: "Java",
    framework: "Spring",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "samantha",
    age: 37,
    city: "Ranchi",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/96.jpg",
  },
  {
    name: "Rayudu",
    age: 35,
    city: "Hyderabad",
    language: "JavaScript",
    framework: "React",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);

nextCV(); // To display the first image
// Eventlistener for Next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old.</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarly works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
  } else {
    alert("End of candidate Applications");
    window.location.reload(); 
  }
}
