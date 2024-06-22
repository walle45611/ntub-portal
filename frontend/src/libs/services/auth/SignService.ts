import { AxiosResponse } from "axios";
import { Login200Response, LoginApi, UserLogin } from "../../openapi";
import { from, of } from "rxjs";
import { catchError } from "rxjs/operators";

export const SignInService = (
    username: string,
    password: string,
    setError: (error: string) => void,
    setAuthenticated: (authState: boolean) => void
) => {
    const loginApi = new LoginApi();
    const request: UserLogin = {
        email: username,
        password: password,
    };

    return from(loginApi.login(request, { withCredentials: true }))
        .pipe(
            catchError((error) => {
                if (error.response) {
                    setError("帳號或密碼錯誤，請重新輸入帳號密碼");
                } else {
                    setError("網絡或服務器錯誤");
                }
                setAuthenticated(false);
                return of(null);
            })
        )
        .subscribe({
            next: (response: AxiosResponse<Login200Response> | null) => {
                if (response && response.data.access) {
                    localStorage.setItem("access", response.data.access);
                    setAuthenticated(true);
                }
            },
            error: (err) => {
                console.error("Error in subscription:", err);
                setError("處理登錄過程中出現異常");
                setAuthenticated(false);
            },
        });
};
