import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import TaskCard from "./components/TaskCard";
import TaskModal from "./components/TaskModal";
import AddTaskModal from "./components/AddTaskModal";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish frontend test",
      description: "Implement all features using Chakra UI and Tailwind",
      status: "In Progress",
      date: "2025-07-05",
    },
    {
      id: 2,
      title: "Review PRs",
      description: "Check pending pull requests and leave comments",
      status: "Pending",
      date: "2025-07-04",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const handleSaveTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter ? task.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const columns = useBreakpointValue({ base: 1, sm: 2 });

  return (
    <Flex minH="100vh" bg="gray.100" align="center" justify="center" px={4}>
      <Box
        w="100%"
        maxW="4xl"
        bg="white"
        rounded="lg"
        boxShadow="md"
        p={6}
        mt={6}
        mb={6}
      >
        <VStack align="stretch" spacing={6}>
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Heading size="lg">Task Manager</Heading>
            <AddTaskModal onAdd={handleAddTask} />
          </Flex>

          {/* Filters */}
          <FilterBar
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          {/* Task Grid */}
          <Box>
            {filteredTasks.length === 0 ? (
              <Text color="gray.500" align="center">
                No tasks found.
              </Text>
            ) : (
              <SimpleGrid columns={columns} spacing={6}>
                {filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={setSelectedTask}
                  />
                ))}
              </SimpleGrid>
            )}
          </Box>
        </VStack>
      </Box>

      {/* Modal */}
      {selectedTask && (
        <TaskModal
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
          onSave={handleSaveTask}
        />
      )}
    </Flex>
  );
}

export default App;
