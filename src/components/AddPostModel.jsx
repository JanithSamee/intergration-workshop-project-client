import React, { useState } from "react";
import {
    Button,
    Group,
    Modal,
    Text,
    FileInput,
    Select,
    Input,
    rem,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

export default function AddPostModel({ opened, onClose, setPosts }) {
    const icon = (
        <IconPhoto style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
    );
    const [newPost, setNewPost] = useState({
        image: null,
        tagName: "",
        description: "",
        userName: "",
        userImage: "",
        createdAt: "",
    });

    // Function to handle adding a new post
    const handleAddPost = () => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        closeAddModal();
    };

    const closeAddModal = () => {
        setNewPost({
            image: null,
            tagName: "",
            description: "",
            userName: "",
            userImage: "",
            createdAt: "",
        });
        onClose();
    };

    return (
        <Modal opened={opened} onClose={closeAddModal} title="Add New Post">
            {/* Add your post creation components here */}
            <Group>
                <Text>
                    Add your file picker, tag selector, and other post
                    properties here
                </Text>

                {/* File Picker */}
                <FileInput
                    leftSection={icon}
                    label="Attach your Image"
                    placeholder="Your Image"
                    leftSectionPointerEvents="none"
                />

                {/* Tag Selector */}
                <Select
                    label="Select Tag"
                    data={[
                        { value: "First Post", label: "First Post" },
                        { value: "Second Post", label: "Second Post" },
                        // Add more tag options as needed
                    ]}
                    placeholder="Select a Tag"
                    value={newPost.tagName}
                    onChange={(value) =>
                        setNewPost({ ...newPost, tagName: value })
                    }
                />
                <br />
                <Input placeholder="Add a description"></Input>
            </Group>

            {/* Example: Cancel and Save buttons */}
            <Group align="right" style={{ marginTop: "16px" }}>
                <Button onClick={closeAddModal} variant="light">
                    Cancel
                </Button>
                <Button onClick={handleAddPost}>Save</Button>
            </Group>
        </Modal>
    );
}
