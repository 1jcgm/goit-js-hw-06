let form = document.getElementsByClassName("login-form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { password, email },
  } = e.currentTarget;

  if (
    password.value.split(" ").length > 1 ||
    email.value.split(" ").length > 1
  ) {
    return alert("please fill in all the fields!");
  }

  let toSenData = {
    [password.name]: password.value,
    [email.name]: email.value,
  };
  console.log(toSenData);
  e.currentTarget.removeEventListener();
});
