import { redirect } from "react-router-dom";

export async function RequireAuthService() {
    if (localStorage.getItem("access") === null) {
        return redirect("/login");
    }
    return true;
}
