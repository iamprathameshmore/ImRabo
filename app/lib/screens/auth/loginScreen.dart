import 'package:flutter/material.dart';
import 'package:imrabo/screens/auth/signupScreen.dart';

class LogInScreen extends StatefulWidget {
  const LogInScreen({super.key});

  @override
  State<LogInScreen> createState() => _LogInScreenState();
}

class _LogInScreenState extends State<LogInScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Spacer(),
          _buildTitle(),
          _buildTextField(),
          _buildButton("Continue", Colors.indigoAccent.shade700, () {}),
          _buildOrDivider(),
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

  Widget _buildTitle() {
    return Column(
      children: [
        Text("Imrabo",
            style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20)),
        SizedBox(height: 25),
        GestureDetector(
          onTap: () {
            Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(builder: (context) => SignupScreen()),
                ModalRoute.withName('/'));
          },
          child: Text("Create an account",
              style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 15,
                  color: Colors.blueAccent)),
        ),
        SizedBox(height: 5),
        Text("Enter your email to sign up for this app",
            style: TextStyle(fontWeight: FontWeight.w600, fontSize: 12)),
        SizedBox(height: 15),
      ],
    );
  }

  Widget _buildTextField() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: SizedBox(
        height: 40,
        child: TextFormField(
          decoration: InputDecoration(
            hintText: "email@domain.com",
            prefixIcon: const Icon(Icons.alternate_email_outlined, size: 18),
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

  Widget _buildButton(String text, Color color, VoidCallback onTap) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10),
      child: Material(
        color: color,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
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
      padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 20),
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

  Widget _buildSocialButton(String? assetPath, String text, VoidCallback onTap,
      {IconData? icon}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      child: Material(
        color: Colors.grey.shade200,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
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
                if (assetPath != null)
                  Image.asset(assetPath, height: 20, width: 20)
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
