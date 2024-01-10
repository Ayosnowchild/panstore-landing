let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

let para = document.getElementById("para");

let root = document.getElementById("root");
async function getCommits() {
  let response = await fetch(url);

  let commits = await response.json();
  console.log(commits);
  let content = commits
    .map((item) => {
      return `<div>
    <p id="para">${item.author.login}</p>
        <img src=${item.author.avatar_url} alt="pp"></div>`;
    })
    .join("");

  root.innerHTML = content;
}

getCommits();
