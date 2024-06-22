import { AxiosResponse } from "axios";
import {
    VerifyGoogleToken200Response,
    VerifyGoogleTokenApi,
    VerifyGoogleTokenRequest,
} from "../../openapi";
import { from, of } from "rxjs";
import { catchError } from "rxjs/operators";

export const VerifyGoogleTokenService = (
    request: VerifyGoogleTokenRequest,
    setError: (error: string) => void,
    setAuthenticated: (authState: boolean) => void
) => {
    const verifyGoogleTokenApi = new VerifyGoogleTokenApi();
    console.log(request);
    return from(
        verifyGoogleTokenApi.verifyGoogleToken(request, {
            withCredentials: true,
        })
    )
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
            next: (
                response: AxiosResponse<VerifyGoogleToken200Response> | null
            ) => {
                if (response && response.data.access_token) {
                    localStorage.setItem("access", response.data.access_token);
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
