import React, { useState } from "react";
import { Box, Button, Center, Text, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utility/api/user.api";
import useAuthContext from "../utility/Context/Auth.Context";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const authContext = useAuthContext();
    const navigator = useNavigate();

    async function handleSubmit() {
        try {
            const res = await login(formData);
            if (res.status === 200 && res.data.token) {
                authContext && authContext.setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                navigator("/account");
            }
        } catch (error) {
            alert("Error Occured");
        }
    }

    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                paddingTop: "72px",
            }}
        >
            <Center>
                <Box
                    p={16}
                    display="flex"
                    w={{ base: 320, sm: 480, lg: 640 }}
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "white",
                    }}
                >
                    <Text
                        component="h1"
                        size="xl"
                        fw={700}
                        style={{ marginBottom: "16px", color: "#333" }}
                    >
                        Login
                    </Text>
                    <TextInput
                        label="Username"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                username: e.target.value,
                            })
                        }
                        style={{ width: "100%", marginBottom: "16px" }}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        style={{ width: "100%", marginBottom: "24px" }}
                    />
                    <Button
                        variant="filled"
                        color="teal"
                        mt={8}
                        mb={8}
                        onClick={() => handleSubmit()}
                        style={{
                            width: "100%",
                            backgroundColor: "#008080",
                            color: "white",
                        }}
                    >
                        Login
                    </Button>
                    <Link
                        to="/register"
                        style={{
                            color: "#008080",
                            textDecoration: "none",
                            textAlign: "center",
                        }}
                    >
                        Create a new account
                    </Link>
                </Box>
            </Center>
        </div>
    );
}
