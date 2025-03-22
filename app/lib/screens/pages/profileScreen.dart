import 'package:flutter/material.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  bool isDarkMode = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("GitHub Profile"),
        actions: [
          IconButton(
            icon: Icon(Icons.settings),
            onPressed: () {
              // Navigate to settings
            },
          )
        ],
      ),
      body: SingleChildScrollView(
        physics: BouncingScrollPhysics(),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Profile Image
              CircleAvatar(
                radius: 50,
                backgroundImage: NetworkImage(
                    "https://avatars.githubusercontent.com/u/9919?s=200&v=4"), // Example GitHub Avatar
              ),
              SizedBox(height: 10),

              // Name and Username
              Text(
                "John Doe",
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              Text(
                "@johndoe",
                style: TextStyle(fontSize: 16, color: Colors.grey),
              ),
              SizedBox(height: 10),

              // Bio
              Text(
                "Software Engineer | Open Source Enthusiast 🌍",
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, color: Colors.grey[700]),
              ),
              SizedBox(height: 20),

              // Followers, Following, and Repos
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  _buildStatItem("Followers", "150"),
                  _buildStatItem("Following", "100"),
                  _buildStatItem("Repositories", "42"),
                ],
              ),
              SizedBox(height: 20),

              // Pinned Repositories
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "Pinned Repositories",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ),
              SizedBox(height: 10),
              _buildRepoItem("flutter_app", "🚀 A cool Flutter app", "Dart"),
              _buildRepoItem(
                  "iot-dashboard", "📡 IoT control panel", "JavaScript"),
              _buildRepoItem("ai-chatbot", "🤖 AI-powered chatbot", "Python"),

              SizedBox(height: 20),

              // Dark Mode Toggle
              ListTile(
                leading: Icon(Icons.dark_mode),
                title: Text("Dark Mode"),
                trailing: Switch(
                  value: isDarkMode,
                  onChanged: (value) {
                    setState(() {
                      isDarkMode = value;
                    });
                  },
                ),
              ),

              // Edit Profile Button
              ElevatedButton(
                onPressed: () {
                  // Navigate to edit profile
                },
                child: Text("Edit Profile"),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatItem(String label, String count) {
    return Column(
      children: [
        Text(
          count,
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        Text(
          label,
          style: TextStyle(fontSize: 14, color: Colors.grey),
        ),
      ],
    );
  }

  Widget _buildRepoItem(String repoName, String description, String language) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 5),
      child: ListTile(
        title: Text(repoName, style: TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(description),
        trailing: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.circle, size: 12, color: _getLanguageColor(language)),
            SizedBox(width: 5),
            Text(language),
          ],
        ),
      ),
    );
  }

  Color _getLanguageColor(String language) {
    switch (language) {
      case "Dart":
        return Colors.blue;
      case "JavaScript":
        return Colors.yellow.shade700;
      case "Python":
        return Colors.green;
      default:
        return Colors.grey;
    }
  }
}
