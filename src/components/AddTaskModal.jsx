import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function AddTaskModal({ onAdd }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!title.trim()) {
      setError(true);
      return;
    }
    const newTask = {
      title,
      description,
      status,
      date: new Date().toLocaleDateString(),
    };
    onAdd(newTask);
    onClose();
    setTitle("");
    setDescription("");
    setStatus("Pending");
    setError(false);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" mb={4}>
        New Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={error} isRequired mb={3}>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              {error && <FormErrorMessage>Title is required.</FormErrorMessage>}
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Description</FormLabel>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Add Task
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddTaskModal;
