import { Link, useNavigate } from "react-router-dom";
import { RegisterService, UserRegistration } from "../../libs";
import { useState } from "react";
import { Dialog } from "../../components";

export const Register = () => {
    const [message, setMessgae] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        const request: UserRegistration = {
            username: form.firstName.value + form.lastName.value,
            password: form.password.value,
            password2: form.password2.value,
            email: form.email.value,
            first_name: form.firstName.value,
            last_name: form.lastName.value,
        };

        RegisterService(
            request,
            (error) => {
                setIsSuccess(false);
                setMessgae(error);
                setShowDialog(true);
            },
            (isRegisted) => {
                if (isRegisted) {
                    setIsSuccess(true);
                    setMessgae("註冊成功歡迎使用" + request.username);
                    setShowDialog(true);
                    setTimeout(() => {
                        setShowDialog(false);
                        navigate("/login");
                    }, 2000);
                }
            }
        );
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <section className="dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="Flowbite logo"
                    />
                    北商大資訊系統
                </p>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            創建帳號
                        </h1>
                        <form
                            onSubmit={handleRegister}
                            className="space-y-4 md:space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    你的 email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    名字
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    姓氏
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    密碼
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    確認密碼
                                </label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        我接受
                                        <Link
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            to=""
                                        >
                                            條款和條件
                                        </Link>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-bule-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                已經有帳號了嗎？
                                <Link
                                    to="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    此登入
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            {showDialog && (
                <Dialog
                    isOpen={showDialog}
                    onClose={closeDialog}
                    errorMessage={message}
                    messageTitle={isSuccess ? "註冊成功" : "註冊失敗"}
                />
            )}
        </section>
    );
};