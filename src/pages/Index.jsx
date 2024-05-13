import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488779382325-da88fd3175e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE1NjE0MTYyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Performing" />
        <Heading as="h1" size="2xl" textAlign="center">
          The Rock Legends Tour 2023
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our biggest tour yet! Experience the magic live in concert across 20 cities worldwide.
        </Text>
        <Button rightIcon={<FaTicketAlt />} colorScheme="teal" size="lg">
          Get Tickets Now!
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
