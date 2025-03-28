export default function setupSocket(io) {
    const namespace = io.of("/imrabo-socket");

    namespace.on("connection", (socket) => {
        console.log(`✅ User connected: ${socket.id}`);

        // Join a room if provided in query params
        const roomId = socket.handshake.query.roomId;
        if (roomId) {
            socket.join(roomId);
            console.log(`🔹 User ${socket.id} joined room: ${roomId}`);
        }

        // Send a welcome message to the connected user
        socket.emit("message", { text: "Welcome to Imrabo Socket!", socketId: socket.id });

        // Handle incoming messages
        socket.on("message", ({ roomId, message }) => {
            if (!roomId || !message) return;
            console.log(`📩 Message to ${roomId}: ${message}`);
            namespace.to(roomId).emit("message", { sender: socket.id, message });
        });

        // Join a room
        socket.on("joinRoom", (roomId) => {
            if (!roomId) return;
            socket.join(roomId);
            console.log(`🔹 User ${socket.id} joined room: ${roomId}`);
            socket.emit("roomJoined", { roomId, message: `Joined room ${roomId}` });
        });

        // Leave a room
        socket.on("leaveRoom", (roomId) => {
            if (!roomId) return;
            socket.leave(roomId);
            console.log(`🚪 User ${socket.id} left room: ${roomId}`);
            socket.emit("roomLeft", { roomId, message: `Left room ${roomId}` });
        });

        // Handle disconnection
        socket.on("disconnect", () => {
            console.log(`❌ User disconnected: ${socket.id}`);
        });
    });
}
