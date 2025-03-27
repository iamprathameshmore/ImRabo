export default function setupSocket(io) {
    const imraboNamespace = io.of("/imrabo-socket"); // ✅ Namespace defined

    imraboNamespace.on("connection", (socket) => {
        console.log(`✅ A user connected to /imrabo-socket: ${socket.id}`);

        // ✅ Extract userId & roomId from connection query parameters
        const userId = socket.handshake.query.userId;
        const roomId = socket.handshake.query.roomId;

        if (!userId) {
            console.log("❌ No userId provided, disconnecting socket.");
            return socket.disconnect();
        }

        // ✅ User gets a **private room** by default
        const privateRoom = `user-${userId}`;
        socket.join(privateRoom);
        console.log(`🔒 User ${userId} joined private room: ${privateRoom}`);

        // ✅ Notify the user that they joined their private room
        socket.to(privateRoom).emit("roomJoined", {
            roomId: privateRoom,
            message: `🔒 User ${userId} joined private room: ${privateRoom}`
        });

        // ✅ If `roomId` is provided, join that too
        if (roomId) {
            socket.join(roomId);
            console.log(`🔹 User ${userId} also joined room: ${roomId}`);
        }

        // ✅ Send a welcome message to the user
        socket.emit("privateMessage", {
            text: "Welcome to your private room!",
            joinedRooms: Array.from(socket.rooms), // Convert Set to array
            socketId: socket.id
        });

        // ✅ Handle private messages within a room
        socket.on("privateMessage", ({ roomId, message }) => {
            if (!roomId || !message) return;
            console.log(`📩 Message from ${userId} to room ${roomId}: ${message}`);
            imraboNamespace.to(roomId).emit("privateMessage", { sender: userId, message });
        });

        // ✅ Dynamically join another private room
        socket.on("joinRoom", (newRoomId) => {
            if (!newRoomId) return;
            console.log(`🔐 User ${userId} joining room: ${newRoomId}`);
            socket.join(newRoomId);
            socket.emit("roomJoined", { roomId: newRoomId, message: `You joined ${newRoomId}` });
        });

        // ✅ Leave a room
        socket.on("leaveRoom", (roomId) => {
            if (!roomId) return;
            console.log(`🚪 User ${userId} leaving room: ${roomId}`);
            socket.leave(roomId);
            socket.emit("roomLeft", { roomId, message: `You left ${roomId}` });
        });

        // ✅ Handle disconnection
        socket.on("disconnect", () => {
            console.log(`❌ User ${userId} disconnected.`);
        });
    });
}
