"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      
      {/* <Space h="sm"/> */}
      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} size="lg" count={5}/>

      <Textarea
        label="Your review" size="sm"
        placeholder="Do you enjoy eating?"
        rows={3}
        my="sm"
      />

      <Button variant="filled" color="orange" size="sm">Submit Review</Button>

      <Divider my="md"/>

      <Group justify="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm" readOnly/>
      </Group>

      <Text ta="center" c="dimmed" fz="sm">Best pizza in this world. I give you X score.</Text> 
      
      <Divider my="sm"/>

      <Group justify="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm" readOnly/>
      </Group>

      <Text ta="center" c="dimmed" fz="15px">My favourite part is pepperoni</Text> 

      <Group justify="center">
        <Pagination total={20} color="orange" my="sm"/>
      </Group>
      
      <Text ta="center" my="sm" c="dimmed">
        Copyright © 2024 Ratchanon Chaiwong 660610789
      </Text>
    </Container>
  );
}