import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    useMantineTheme,
    rem,
} from "@mantine/core";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons-react";

export function PostCard({
    image,
    tagName,
    description,
    userName,
    userImage,
    createdAt,
}) {
    const theme = useMantineTheme();

    return (
        <Card
            withBorder
            padding="lg"
            radius="md"
            m={16}
            style={{ maxWidth: "720px" }}
        >
            <Card.Section mb="sm">
                <Image src={image} alt={description} height={180} />
            </Card.Section>

            <Badge w="fit-content" variant="light">
                {tagName || "none"}
            </Badge>

            <Text fw={700} mt="xs">
                {description}
            </Text>

            <Group mt="lg">
                <Avatar
                    src={
                        userImage ||
                        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                    }
                    radius="sm"
                />
                <div>
                    <Text fw={500}>{userName || "Anonymous"}</Text>
                    <Text fz="xs" c="dimmed">
                        {createdAt}
                    </Text>
                </div>
            </Group>

            <Card.Section>
                <Group justify="space-between">
                    <Text fz="xs" c="dimmed"></Text>
                    <Group gap={0}>
                        <ActionIcon variant="subtle" color="gray">
                            <IconHeart
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                            <IconBookmark
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.yellow[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                            <IconShare
                                style={{ width: rem(20), height: rem(20) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
}
