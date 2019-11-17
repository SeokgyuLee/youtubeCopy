import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    // To-Do:Register User
    // To-Do:Log User In
    res.redirect(routes.home);
  }
};
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "login" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  //To-Do : Process Log Out
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users", { pageTitle: "users" });
export const userDetail = (req, res) =>
  res.render("user_detail", { pageTitle: "userDetail" });
export const editProfile = (req, res) =>
  res.render("edit_profile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("change_password", { pageTitle: "changePassword" });
