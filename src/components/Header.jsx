import { useState } from "react";
import { Container, Group, Burger, Text, Badge, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
// import { PersonIcon } from "/icons";
import { IconUser } from "@tabler/icons-react";
import useAuthContext from "../utility/Context/Auth.Context";

const links = [
    { link: "/login", label: "Login" },
    { link: "/register", label: "Register" },
    { link: "/posts", label: "Posts" },
    { link: "/about", label: "About PostBucket" },
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            style={{
                display: "block",
                lineHeight: 1,
                padding: "8px 12px",
                borderRadius: "var(--mantine-radius-sm)",
                textDecoration: "none",
                color: "light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))",
                fontSize: "var(--mantine-font-size-sm)",
                fontWeight: 500,
                backgroundColor:
                    active === link.link
                        ? "var(--mantine-color-blue-filled)"
                        : "inherit",
                color:
                    active === link.link
                        ? "var(--mantine-color-white)"
                        : "inherit",
            }}
            onClick={() => setActive(link.link)}
        >
            {link.label}
        </Link>
    ));

    const authContext = useAuthContext();
    return (
        <header
            style={{
                height: "var(--mantine-space-9)",
                marginBottom: "var(--mantine-space-12)",
                backgroundColor: "var(--mantine-color-body)",
                borderBottom:
                    "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
                padding: "16px",
            }}
        >
            <Container
                size="md"
                style={{
                    height: "var(--mantine-space-9)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Text>Post Bucket</Text>
                </Link>

                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Link
                    to="/account"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <Tooltip label="Account">
                        <IconUser />
                    </Tooltip>
                    <Text c="dimmed">
                        {authContext.user && authContext.user.email}
                    </Text>
                </Link>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="xs"
                    size="sm"
                />
            </Container>
        </header>
    );
}
