import { redirect } from "react-router-dom";
import { deleteItem, fakeRequest } from "./utils";

export async function submitAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  const favorites = [];

  if (formData._action === "logout") {
    deleteItem({ key: "userName" });
    deleteItem({ key: "favorites" });
    return redirect("/");
  }

  if (formData._action === "newUser") {
    if (formData.userName === "") {
      try {
        localStorage.setItem("userName", JSON.stringify("Guest User"));
        return formData;
      } catch (err) {
        throw new Error("Please, try again");
      }
    }
    if (formData.userName) {
      await fakeRequest();
      try {
        localStorage.setItem("userName", JSON.stringify(formData.userName));
        localStorage.setItem("favorites", JSON.stringify(favorites));
        return formData;
      } catch (err) {
        throw new Error("There was a problem creating your account");
      }
    }
  }
}
