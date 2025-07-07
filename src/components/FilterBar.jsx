import { Input, Select, HStack } from "@chakra-ui/react";

function FilterBar({ search, setSearch, statusFilter, setStatusFilter }) {
  return (
    <HStack spacing={4} mb={4} flexWrap="wrap">
      <Input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxW="300px"
      />
      <Select
        placeholder="Filter by status"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        maxW="200px"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>
    </HStack>
  );
}

export default FilterBar;
