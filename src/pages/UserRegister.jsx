import React from "react";
import { Box, Button, Center, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

export default function UserRegister() {
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
                        Signup
                    </Text>
                    <TextInput
                        label="Username"
                        style={{ width: "100%", marginBottom: "16px" }}
                    />
                    <TextInput
                        label="Email"
                        type="email"
                        style={{ width: "100%", marginBottom: "16px" }}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        style={{ width: "100%", marginBottom: "24px" }}
                    />
                    <Button
                        variant="filled"
                        color="teal"
                        mt={8}
                        mb={8}
                        style={{
                            width: "100%",
                            backgroundColor: "#008080",
                            color: "white",
                        }}
                    >
                        Signup
                    </Button>
                    <Text style={{ marginBottom: "16px" }}>
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            style={{ color: "#008080", textDecoration: "none" }}
                        >
                            Login
                        </Link>
                    </Text>
                </Box>
            </Center>
        </div>
    );
}
