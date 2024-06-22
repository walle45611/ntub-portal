import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const navbar = () => {
    const navigate = useNavigate();

    async function singOut() {
        localStorage.removeItem("access");
        navigate("/login");
    }

    return (
        <Navbar maxWidth="xl" isBordered className="mb-[10px]">
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <Link color="foreground" href="/">
                        <p className="sm:block font-bold text-inherit">
                            北商大資訊系統
                        </p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4">
                    <NavbarItem>
                        <Link
                            color="foreground"
                            href="https://www.ntub.edu.tw/"
                        >
                            學校官方網站
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color="foreground"
                            href="https://ntcbadm1.ntub.edu.tw/"
                        >
                            學生資訊系統
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="https://bb.ntub.edu.tw/">
                            BlackBoard
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">登入帳號為</p>
                            <p className="font-semibold">
                                {localStorage.getItem("isAuthenticated") ===
                                    "true"
                                    ? "Jason Hughes"
                                    : "Guest"}
                            </p>
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            <Link href="http://localhost:5174/">
                                幫助 & 回饋
                            </Link>
                        </DropdownItem>
                        <DropdownItem
                            onClick={singOut}
                            key="logout"
                            color="danger"
                        >
                            登出
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default navbar;
