import 'package:flutter/material.dart';
import 'package:imrabo/screens/auth/signupScreen.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({super.key});

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Imrabo",
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
        centerTitle: true,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
              height: 250,
              padding: EdgeInsets.symmetric(vertical: 25),
              color: Colors.grey.shade900,
              width: double.infinity,
              child: Image(image: AssetImage('assets/imrabo-logo.png'))),
          SizedBox(
            height: 25,
          ),
          Text(
            "I make mistakes growing up. I'm not perfect; I'm not a robot",
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
          )
        ],
      ),
      bottomNavigationBar: Padding(
        padding: const EdgeInsets.only(bottom: 20, right: 15, left: 15),
        child: Material(
          color: Colors.grey.shade900,
          borderRadius: BorderRadius.circular(100),
          child: InkWell(
            borderRadius: BorderRadius.circular(100),
            splashColor: Colors.indigoAccent.shade400,
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => SignupScreen()));
            },
            child: Container(
              alignment: Alignment.center,
              height: 50,
              width: double.infinity,
              decoration: BoxDecoration(
                  // color: Colors.grey.shade900,
                  borderRadius: BorderRadius.circular(100)),
              child: Text(
                "Let's Begain !",
                style: TextStyle(color: Colors.white),
                textAlign: TextAlign.center,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
