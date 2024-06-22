import { RegisterApi, UserRegistration } from "../../openapi";
import { from, of } from "rxjs";
import { catchError } from "rxjs/operators";

export const RegisterService = (
    userRegistration: UserRegistration,
    setError: (error: string) => void,
    isRegisted: (authState: boolean) => void
) => {
    const registerApi = new RegisterApi();

    return from(registerApi.register(userRegistration))
        .pipe(
            catchError((error) => {
                if (error.response) {
                    setError("註冊失敗，請重新輸入帳號密碼");
                } else {
                    setError("網絡或服務器錯誤");
                }
                isRegisted(false);
                return of(null);
            })
        )
        .subscribe({
            next: (response) => {
                if (response) {
                    isRegisted(true);
                } else {
                    isRegisted(false);
                }
            },
            error: (err) => {
                console.error("Error in subscription:", err);
                setError("處理註冊過程中出現異常");
                isRegisted(false);
            },
        });
};
