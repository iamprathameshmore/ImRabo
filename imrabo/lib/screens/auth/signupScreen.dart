import 'package:flutter/material.dart';
import 'package:imrabo/screens/pages/homeScreen.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Sign Up",
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
        centerTitle: true,
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.dark_mode)),
          SizedBox(
            width: 5,
          )
        ],
      ),
      body: Column(
        children: [
          SizedBox(
            height: 25,
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: TextFormField(
              decoration: InputDecoration(
                  labelText: "Name",
                  labelStyle: TextStyle(color: Colors.grey.shade700),
                  border: OutlineInputBorder()),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: TextFormField(
              decoration: InputDecoration(
                  labelText: "Email Address",
                  labelStyle: TextStyle(color: Colors.grey.shade700),
                  border: OutlineInputBorder()),
            ),
          ),
        ],
      ),
      bottomNavigationBar: Container(
        height: 130,
        child: Padding(
          padding: EdgeInsets.only(bottom: 20, right: 15, left: 15),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Material(
                color: Colors.grey.shade900,
                borderRadius: BorderRadius.circular(100),
                child: InkWell(
                  borderRadius: BorderRadius.circular(100),
                  splashColor: Colors.indigoAccent.shade400,
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HomeScreen()));
                  },
                  child: Container(
                    alignment: Alignment.center,
                    height: 50,
                    width: double.infinity,
                    decoration: BoxDecoration(
                        // color: Colors.grey.shade900,
                        borderRadius: BorderRadius.circular(100)),
                    child: Text(
                      "Sign Up",
                      style: TextStyle(color: Colors.white),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              TextButton(
                  onPressed: () {},
                  child: Text(
                    "Log In",
                    style: TextStyle(color: Colors.grey.shade900),
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
