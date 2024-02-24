import React, { useState } from "react";
import { Divider, Button, Modal, Container, Group, Text } from "@mantine/core";
import { PostCard } from "../components/PostCard";
import { Header } from "../components/header";
import GradientButton from "../components/GradientButton";
import AddPostModel from "../components/AddPostModel";

const Post = () => {
    const [posts, setPosts] = useState([
        {
            image: "https://via.placeholder.com/800x400",
            tagName: "First Post",
            description: "This is a small description of the first post.",
            userName: "John Doe",
            userImage: "https://via.placeholder.com/40x40",
            createdAt: "December 24, 2023",
        },
        {
            image: "https://via.placeholder.com/800x400",
            tagName: "Second Post",
            description: "This is a small description of the second post.",
            userName: "Jane Smith",
            userImage: "https://via.placeholder.com/40x40",
            createdAt: "December 25, 2023",
        },
        {
            image: "https://via.placeholder.com/800x400",
            tagName: "Third Post",
            description: "This is a small description of the third post.",
            userName: "John Doe",
            userImage: "https://via.placeholder.com/40x40",
            createdAt: "December 26, 2023",
        },
    ]);

    const [showAddPostModel, setShowAddPostModel] = useState(false);

    const openAddModal = () => {
        setShowAddPostModel(true);
    };

    const closeAddModal = () => {
        setShowAddPostModel(false);
    };

    return (
        <div>
            <Header />
            <Divider />
            <Container
                size="md"
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 style={{ marginBottom: "16px", textAlign: "center" }}>
                    Latest Posts
                </h1>
                {posts &&
                    posts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
            </Container>

            {/* Floating Add Button */}
            <GradientButton
                onClick={openAddModal}
                style={{
                    position: "fixed",
                    bottom: "16px",
                    right: "16px",
                    zIndex: 1000,
                }}
            >
                +
            </GradientButton>
            <AddPostModel
                opened={showAddPostModel}
                onClose={closeAddModal}
                setPosts={setPosts}
            ></AddPostModel>
        </div>
    );
};

export default Post;
