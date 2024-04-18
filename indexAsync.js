const ref = {
  form: document.querySelector(".formCreateAs"),
  title: document.querySelector(".titleAs"),
  body: document.querySelector(".bodyAs"),
  formPatch: document.querySelector(".formPatch"),
  titlePatch: document.querySelector(".titlePatch"),
  bodyPatch: document.querySelector(".bodyPatch"),
  uls: document.querySelector(".listRender"),
};

const renderList = (data) => {
  const result = data.reduce(
    (acc, el) => (acc += `<li><b>${el.title}</b>:</br> ${el.body}</li>`),
    ""
  );
  ref.uls.insertAdjacentHTML("beforeend", result);
};

// post
const postUser = async (e) => {
  e.preventDefault();
  ref.uls.innerHTML = "";
  const options = {
    method: "POST",
    body: JSON.stringify({
      title: ref.title.value,
      body: ref.body.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/",
      options
    );
    const result = await response.json();
    console.log(result);
    renderList([result]);
    // return result;
  } catch (error) {
    console.log("error in try", error);
  }
};

ref.form.addEventListener("submit", postUser);

// PATCH
const patchUser = async (e) => {
  e.preventDefault();
  ref.uls.innerHTML = "";
  const opions = {
    method: "PATCH",
    body: JSON.stringify({ title: ref.titlePatch.value }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      opions
    );
    const data = await response.json();
    console.log(data);
    renderList([data]);
  } catch (error) {
    console.log("error in try", error);
  }
};

ref.formPatch.addEventListener("submit", patchUser);
