import React, { useEffect, useState } from "react";
import { Button, Modal, Text, Input, Group, Grid } from "@mantine/core";
import { Header } from "../components/Header";
import { getUserData } from "../utility/api/user.api";
import useAuthContext from "../utility/Context/Auth.Context";

const UserAccount = () => {
    const [user, setUser] = useState({
        fullName: "John Doe",
        phoneNumber: "123-456-7890",
        password: "********", // Assuming you have a password hash here
    });

    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = () => {
        setChangePasswordModal(false);
    };

    const handleFullNameChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, fullName: e.target.value }));
    };

    const handlePhoneNumberChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }));
    };

    const authContext = useAuthContext();

    useEffect(() => {
        async function getData() {
            try {
                const res = await getUserData(authContext.token);
                authContext.setUser({
                    username: res.data.user.username,
                    email: res.data.user.email,
                    _id: res.data.user._id,
                });
                setUser({
                    fullName: res.data.user.username,
                    phoneNumber: res.data.email,
                });
            } catch (error) {
                console.log(error);
            }
        }
        authContext.token && getData();
    }, [authContext]);

    return (
        <>
            <Header></Header>
            <div style={{ padding: "32px" }}>
                <h1>User Account</h1>
                <Grid>
                    <Grid.Col span={12} md={6}>
                        <Text>Full Name:</Text>
                        <Input
                            value={user.fullName || ""}
                            onChange={handleFullNameChange}
                            placeholder="Enter your full name"
                        />
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Text>Phone Number:</Text>
                        <Input
                            value={user.phoneNumber || ""}
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter your phone number"
                        />
                    </Grid.Col>
                </Grid>

                <Button
                    onClick={() => setChangePasswordModal(true)}
                    style={{ marginTop: "16px" }}
                >
                    Change Password
                </Button>

                {/* Change Password Modal */}
                <Modal
                    title="Change Password"
                    opened={changePasswordModal}
                    onClose={() => setChangePasswordModal(false)}
                >
                    <Input
                        mb={8}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        type="password"
                        label="New Password"
                        required
                    />
                    <Input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        type="password"
                        label="Confirm Password"
                        required
                    />
                    <Button
                        onClick={handleChangePassword}
                        style={{ marginTop: "16px" }}
                    >
                        Save Changes
                    </Button>
                </Modal>
            </div>
        </>
    );
};

export default UserAccount;
