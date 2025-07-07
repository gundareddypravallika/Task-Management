import { Box, Text, Badge, Card, CardBody } from "@chakra-ui/react";

function TaskCard({ task, onClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "yellow";
      case "In Progress":
        return "blue";
      case "Completed":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition"
      onClick={() => onClick(task)}
    >
      <CardBody className="space-y-2">
        <Text fontWeight="bold" fontSize="lg">
          {task.title}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {task.description}
        </Text>
        <Badge colorScheme={getStatusColor(task.status)}>{task.status}</Badge>
        <Text fontSize="xs" color="gray.500">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </Text>
      </CardBody>
    </Card>
  );
}

export default TaskCard;
