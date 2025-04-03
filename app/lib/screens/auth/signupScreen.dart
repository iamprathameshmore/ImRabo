import 'package:flutter/material.dart';
import 'package:imrabo/screens/auth/loginScreen.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  bool _isLoading = false;

  Future<void> _signUp() async {
    setState(() {
      _isLoading = true;
    });

    final String name = _nameController.text;
    final String email = _emailController.text;

    if (name.isEmpty || email.isEmpty) {
      _showSnackbar("Please enter all details");
      setState(() {
        _isLoading = false;
      });
      return;
    }

    try {
      final response = await http.post(
        Uri.parse('https://imrabo.onrender.com/auth/sign-up'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({"name": name, "email": email}),
      );

      final data = jsonDecode(response.body);

      if (response.statusCode == 200) {
        SharedPreferences prefs = await SharedPreferences.getInstance();
        await prefs.setString('name', name);
        await prefs.setString('email', email);

        _showSnackbar("OTP Sent. Verify your email.");
        // Navigate to OTP screen
      } else {
        _showSnackbar(data["message"] ?? "Signup failed");
      }
    } catch (e) {
      _showSnackbar("Error occurred. Try again.");
    }

    setState(() {
      _isLoading = false;
    });
  }

  void _showSnackbar(String message) {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Spacer(),
          const Text("Imrabo",
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20)),
          const SizedBox(height: 25),
          GestureDetector(
            onTap: () {
              Navigator.pushAndRemoveUntil(
                  context,
                  MaterialPageRoute(builder: (context) => LogInScreen()),
                  ModalRoute.withName('/'));
            },
            child: Text("Already have an account",
                style: TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 15,
                    color: Colors.blueAccent)),
          ),
          const SizedBox(height: 5),
          const Text("Enter your email to sign up for this app",
              style: TextStyle(fontWeight: FontWeight.w600, fontSize: 12)),
          const SizedBox(height: 20),
          _buildTextField(
              textController: _nameController,
              hintText: "Full Name",
              icon: Icons.person_outline_rounded),
          _buildTextField(
              textController: _emailController,
              hintText: "email@domain.com",
              icon: Icons.alternate_email_outlined),
          const SizedBox(height: 10),
          _buildButton(
            text: _isLoading ? "Processing..." : "Sign Up",
            color: Colors.indigoAccent.shade700,
            onTap: _signUp,
          ),
          const SizedBox(height: 20),
          _buildOrDivider(),
          const SizedBox(height: 25),
          _buildSocialButton(
              "assets/icons/microsoft.png", "Continue with Microsoft", () {}),
          _buildSocialButton(
              "assets/icons/apple.png", "Continue with Apple", () {}),
          _buildSocialButton(
              "assets/icons/google.png", "Continue with Google", () {}),
          _buildSocialButton(null, "Continue with Phone", () {},
              icon: Icons.phone_outlined),
          const Spacer(),
          _buildTermsAndPrivacy(),
          const SizedBox(height: 25),
        ],
      ),
    );
  }

  Widget _buildTextField(
      {required String hintText,
      required IconData icon,
      required textController}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      child: SizedBox(
        height: 40,
        child: TextFormField(
          controller: textController,
          cursorHeight: 20,
          decoration: InputDecoration(
            contentPadding:
                const EdgeInsets.symmetric(vertical: 10, horizontal: 10),
            hintText: hintText,
            hintStyle: TextStyle(color: Colors.grey.shade600),
            prefixIcon: Icon(icon, size: 18),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide:
                  BorderSide(color: Colors.indigoAccent.shade100, width: 2),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide:
                  BorderSide(color: Colors.indigoAccent.shade700, width: 2),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildButton(
      {required String text,
      required Color color,
      required VoidCallback onTap}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10),
      child: Material(
        color: color,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
          splashColor: Colors.grey.shade900,
          onTap: onTap,
          child: Container(
            alignment: Alignment.center,
            height: 40,
            width: double.infinity,
            child: Text(text,
                style: const TextStyle(color: Colors.white, fontSize: 15)),
          ),
        ),
      ),
    );
  }

  Widget _buildOrDivider() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 25),
      child: Row(
        children: [
          Expanded(child: Divider(color: Colors.grey.shade300, thickness: 1)),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 8),
            child: Text("or", style: TextStyle(color: Colors.grey)),
          ),
          Expanded(child: Divider(color: Colors.grey.shade300, thickness: 1)),
        ],
      ),
    );
  }

  Widget _buildSocialButton(String? imagePath, String text, VoidCallback onTap,
      {IconData? icon}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      child: Material(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
          splashColor: Colors.grey.shade900,
          onTap: onTap,
          child: Container(
            alignment: Alignment.center,
            height: 40,
            width: double.infinity,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: Colors.grey.shade300),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (imagePath != null)
                  Image.asset(imagePath, height: 20, width: 20)
                else if (icon != null)
                  Icon(icon, size: 18),
                const SizedBox(width: 10),
                Text(text, style: const TextStyle(color: Colors.black)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTermsAndPrivacy() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text("Terms of Use",
            style: TextStyle(
              color: Colors.blueAccent.shade400,
              fontSize: 12,
            )),
        const SizedBox(width: 10),
        Container(width: 1.5, height: 15, color: Colors.grey),
        const SizedBox(width: 10),
        Text("Privacy Policy",
            style: TextStyle(
              color: Colors.blueAccent.shade400,
              fontSize: 12,
            )),
      ],
    );
  }
}
