// https://jsonplaceholder.typicode.com/posts/

const ref = {
  getBtn: document.querySelector(".buttonGet"),
  form: document.querySelector(".formCreate"),
  inputTitle: document.querySelector(".title"),
  inputBody: document.querySelector(".body"),
  formUpdate: document.querySelector(".formUpdate"),
  titleUpdate: document.querySelector(".titleUpdate"),
  bodyUpdate: document.querySelector(".bodyUpdate"),
  userDelete: document.querySelector(".userDelete"),
  userId: document.querySelector(".userId"),
  uls: document.querySelector(".listRender"),
};

const renderList = (data) => {
  const result = data.reduce(
    (acc, el) => (acc += `<li><b>${el.title}</b>:</br> ${el.body}</li>`),
    ""
  );
  ref.uls.insertAdjacentHTML("beforeend", result);
};

// read/GET
const onGetBtn = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
      renderList(user);
    })
    .catch((e) => console.log("error", e));
};

ref.getBtn.addEventListener("click", onGetBtn);

// POST
const postUser = (e) => {
  e.preventDefault();
  ref.uls.innerHTML = "";
  const title = ref.inputTitle.value;
  const body = ref.inputBody.value;
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({ title, body, userId: 1 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderList([data]);
    })
    .catch((e) => console.log("error", e));
};

ref.form.addEventListener("submit", postUser);

// PUT
const updateUser = (e) => {
  e.preventDefault();
  ref.uls.innerHTML = "";
  const title = ref.titleUpdate.value;
  const body = ref.bodyUpdate.value;
  const options = {
    method: "PUT",
    body: JSON.stringify({ title, body, id: 1, userId: 1 }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(`https://jsonplaceholder.typicode.com/posts/1`, options)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      renderList([res]);
    })
    .catch((e) => console.log(e));
};

ref.formUpdate.addEventListener("submit", updateUser);

// DELETE
const deleteUser = (e) => {
  e.preventDefault();
  ref.uls.innerHTML = "";
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${Number(ref.userId.value)}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

ref.userDelete.addEventListener("submit", deleteUser);
