// Dummy data for clients
const clients = [
    { id: 1, name: "John Doe", phone: "+1234567890", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", phone: "+1987654321", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", phone: "+1098765432", email: "alice.johnson@example.com" },
    { id: 4, name: "Bob Brown", phone: "+1123456789", email: "bob.brown@example.com" },
    { id: 5, name: "Charlie Davis", phone: "+1222333444", email: "charlie.davis@example.com" }
];

// Dummy data for projects
const projects = [
    {
        id: 101,
        name: "Website Redesign",
        clientID: 1,
        description: "Revamping the company's main website for a modern look.",
        status: "In Progress"
    },
    {
        id: 102,
        name: "Mobile App Development",
        clientID: 2,
        description: "Developing a mobile app for online shopping.",
        status: "Completed"
    },
    {
        id: 103,
        name: "Cloud Migration",
        clientID: 3,
        description: "Migrating the client's infrastructure to a cloud platform.",
        status: "Pending"
    },
    {
        id: 104,
        name: "E-commerce Platform",
        clientID: 4,
        description: "Building a new e-commerce platform from scratch.",
        status: "In Progress"
    },
    {
        id: 105,
        name: "Cybersecurity Audit",
        clientID: 5,
        description: "Conducting a comprehensive cybersecurity audit.",
        status: "Completed"
    }
];

module.exports = { clients, projects };