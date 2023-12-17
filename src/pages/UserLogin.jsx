import { Box, Button, Center, Text, TextInput } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div style={{ width: "100vw" }} >
      <Center>
        <Box p={16} display={"flex"} w={{ base: 320, sm: 480, lg: 640 }} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Text component='h1' size='xl' fw={700}>Login</Text>
          <TextInput label="Username" style={{ width: "100%" }}></TextInput>
          <TextInput label="password" style={{ width: "100%" }}></TextInput>
          <Button variant="filled" color="teal" mt={8} mb={8} style={{ width: "100%" }}>Login</Button>
          <Link to={"/register"}>Create new Account</Link>
        </Box>
      </Center>
    </div>
  )
}
