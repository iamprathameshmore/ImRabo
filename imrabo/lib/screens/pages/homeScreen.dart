import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:imrabo/screens/pages/notificationScreen.dart';
import 'package:imrabo/screens/pages/profileScreen.dart';
import 'package:flutter/rendering.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool isFabVisible = true;
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_scrollListener);
  }

  void _scrollListener() {
    if (_scrollController.position.userScrollDirection ==
        ScrollDirection.reverse) {
      if (isFabVisible) {
        setState(() {
          isFabVisible = false;
        });
      }
    } else if (_scrollController.position.userScrollDirection ==
        ScrollDirection.forward) {
      if (!isFabVisible) {
        setState(() {
          isFabVisible = true;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 0,
            automaticallyImplyLeading: false,
            floating: true,
            pinned: false,
            elevation: 5,
            backgroundColor: Colors.grey.shade100,
            surfaceTintColor: Colors.grey.shade100,
            foregroundColor: Colors.black,
            title: Row(
              children: [
                GestureDetector(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ProfileScreen()));
                  },
                  child: Container(
                    height: 40,
                    width: 40,
                    padding: EdgeInsets.all(2),
                    decoration: BoxDecoration(
                        color: Colors.black,
                        borderRadius: BorderRadius.circular(100)),
                    child: CircleAvatar(
                      backgroundColor: Colors.blueGrey,
                      backgroundImage: NetworkImage(
                          'https://avatars.githubusercontent.com/u/91453437?v=4'),
                      // backgroundImage: ,
                    ),
                  ),
                ),
                SizedBox(
                  width: 10,
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Prathamesh More',
                      style: GoogleFonts.dmSans(
                          fontWeight: FontWeight.w600, fontSize: 15),
                    ),
                    Text(
                      'iamprathaemshmore07@gmail.com',
                      style: GoogleFonts.dmSans(
                          fontWeight: FontWeight.w500, fontSize: 10),
                    ),
                  ],
                ),
              ],
            ),
            actions: [
              IconButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => NotificationScreen()));
                  },
                  icon: Icon(Icons.notifications)),
              IconButton(onPressed: () {}, icon: Icon(Icons.more_vert)),
              SizedBox(
                width: 5,
              )
            ],
          ),
          SliverToBoxAdapter(
            child: Column(
              children: [
                Container(
                  height: 250,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        Colors.purple,
                        Colors.deepPurpleAccent.shade400,
                        Colors.blue.shade400,
                        Colors.blueAccent.shade100,
                      ],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                  ),
                ),
                // _buildMonitoringCard(),
                _buildIconGrid(),
                _buildIntegrationsGrid(),
                _buildAutomationCarousel(),
                _buildInvitationSection(),
                // _buildMonitoringCardsSection(),
                SizedBox(
                  height: 25,
                ),
                Text(
                  'Created By',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                ),
                Text(
                  '@iamprathameshmore',
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 12),
                ),
                SizedBox(
                  height: 25,
                ),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: GestureDetector(
        onTap: () {},
        onDoubleTap: () {},
        onLongPress: () {
          showModalBottomSheet(
            context: context,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
            ),
            backgroundColor: Colors.white,
            isScrollControlled: true, // Allows full-screen or flexible height
            builder: (context) => Padding(
              padding: EdgeInsets.only(
                bottom: MediaQuery.of(context)
                    .viewInsets
                    .bottom, // Handle keyboard overlap
              ),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // Top Handle for Dragging
                    Container(
                      width: 40,
                      height: 5,
                      decoration: BoxDecoration(
                        color: Colors.grey[400],
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    SizedBox(height: 10),

                    // Live Status Header
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Live Status",
                          style: GoogleFonts.poppins(
                              fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                        Row(
                          children: [
                            Icon(Icons.circle,
                                color: Colors.green,
                                size: 12), // Live Indicator
                            SizedBox(width: 5),
                            Text(
                              "Online",
                              style:
                                  TextStyle(fontSize: 14, color: Colors.green),
                            ),
                          ],
                        ),
                      ],
                    ),

                    SizedBox(height: 15),

                    // Real-Time Data Display
                    _buildDataRow("Temperature", "22°C", Icons.thermostat),
                    _buildDataRow("Humidity", "60%", Icons.water_drop),
                    _buildDataRow(
                        "Device Status", "Active", Icons.power_settings_new),
                    _buildDataRow(
                        "Battery", "85%", Icons.battery_charging_full),

                    SizedBox(height: 20),

                    // Close Button
                    ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      child: Text("Close"),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.blueAccent,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                    ),

                    SizedBox(height: 10),
                  ],
                ),
              ),
            ),
          );
        },
        child: InkWell(
          child: FloatingActionButton.extended(
            splashColor: Colors.deepPurpleAccent.shade400,
            onPressed: () {},
            label: Text(
              'imrabo',
              style:
                  GoogleFonts.dmSans(fontWeight: FontWeight.bold, fontSize: 15),
            ),
            icon: Image(
              image: AssetImage('assets/imrabo-logo.png'),
              height: 25,
            ),
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(100))),
            backgroundColor: Colors.black,
            foregroundColor: Colors.white,
          ),
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }

  Widget _buildDataRow(String label, String value, IconData icon) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.blueAccent, size: 24),
          SizedBox(width: 10),
          Text(
            label,
            style:
                GoogleFonts.poppins(fontSize: 16, fontWeight: FontWeight.w500),
          ),
          Spacer(),
          Text(
            value,
            style:
                GoogleFonts.poppins(fontSize: 16, fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }

  // Widget _buildMonitoringCard() {
  //   return Container(
  //       child: Image(
  //           fit: BoxFit.fitWidth,
  //           image: NetworkImage(
  //               'https://i.pinimg.com/736x/36/27/05/3627056545c2c414a351ba8c7378739f.jpg')));
  // }

  Widget _buildIconGrid() {
    Map<String, IconData> devices = {
      "Sensor 1": Icons.sensors,
      "Camera": Icons.camera_alt,
      "Thermostat": Icons.thermostat,
      "Speaker": Icons.speaker,
      "Light": Icons.lightbulb,
      "Smart Lock": Icons.lock,
      "Router": Icons.router,
      "Switch": Icons.toggle_on,
    };

    List<String> usernames = [
      "iamprathameshmore",
      "gauravawanke",
      "john_doe",
      "jane_smith"
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(height: 20),

        // Device Icons Grid
        GridView.builder(
          shrinkWrap: true,
          physics: NeverScrollableScrollPhysics(),
          padding: EdgeInsets.symmetric(vertical: 0),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
          ),
          itemCount: devices.length,
          itemBuilder: (context, index) {
            String deviceName = devices.keys.elementAt(index);
            IconData deviceIcon = devices[deviceName]!;

            return Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                    height: 50,
                    width: 50,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(2),
                        color: Colors.black),
                    child: Icon(deviceIcon, color: Colors.white)),

                SizedBox(height: 5), // Spacing between avatar & text
                Text(
                  deviceName,
                  style: GoogleFonts.dmSans(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                  textAlign: TextAlign.center,
                  overflow: TextOverflow.ellipsis, // Handles long text
                ),
              ],
            );
          },
        ),

        // Usernames List as Scrollable Chips
        Container(
          alignment: Alignment.topCenter,
          height: 40, // Adjust height as needed
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.only(left: 10, right: 10), // Optional padding
            itemCount: usernames.length,
            itemBuilder: (context, index) {
              final username = usernames[index];
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 6),
                child: Chip(
                  label: Text(username),
                  backgroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20), // Rounded corners
                    side: BorderSide.none, // No border
                  ),
                ),
              );
            },
          ),
        ),

        SizedBox(height: 10),
      ],
    );
  }

  Widget _buildIntegrationsGrid() {
    List<String> deviceNames = [
      "Sensor 1",
      "Camera",
      "Thermostat",
      "Speaker",
      "Light",
      "Smart Lock",
      "Router",
      "Switch",
    ]; // Example device names

    return Padding(
      padding: EdgeInsets.all(0.0),
      child: Column(
        // crossAxisAlignment: CrossAxisAlignment.star,
        // mainAxisAlignment: MainAxisAlignment.start,
        children: [
          // Header Section
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 15),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Connected Devices',
                  style: GoogleFonts.dmSans(
                    fontSize: 20,
                    color: Colors.grey.shade700,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                SizedBox(
                  height: 50,
                  width: 50,
                  child: IconButton(
                    onPressed: () {},
                    icon: Icon(Icons.add),
                  ),
                ),
              ],
            ),
          ),

          // Devices Grid
          GridView.builder(
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            padding: EdgeInsets.symmetric(vertical: 10),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 4,
              crossAxisSpacing: 8,
              mainAxisSpacing: 8,
            ),
            itemCount: deviceNames.length,
            itemBuilder: (context, index) {
              return Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  CircleAvatar(
                    backgroundColor: Colors.black,
                    radius: 25,
                    child: Icon(Icons.devices_other, color: Colors.white),
                  ),
                  SizedBox(height: 4), // Spacing between avatar & text
                  Text(
                    deviceNames[index],
                    style: GoogleFonts.dmSans(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                    textAlign: TextAlign.center,
                    overflow: TextOverflow.ellipsis, // Handles long text
                  ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _buildAutomationCarousel() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Header Section
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Automations',
                style: GoogleFonts.dmSans(
                  fontSize: 20,
                  color: Colors.grey.shade700,
                  fontWeight: FontWeight.w500,
                ),
              ),
              IconButton(
                onPressed: () {},
                icon: Icon(Icons.add),
              ),
            ],
          ),
        ),
        SizedBox(height: 12),

        // Automation Cards Carousel
        SizedBox(
          height: 160, // Slightly larger cards for better UI
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: 5,
            padding: const EdgeInsets.only(left: 20),
            itemBuilder: (context, index) {
              return Container(
                width: 200,
                margin: const EdgeInsets.only(right: 14),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  gradient: LinearGradient(
                    colors: [
                      Colors.purple,
                      Colors.deepPurpleAccent.shade400,
                      Colors.blue.shade400,
                      Colors.blueAccent.shade100,
                    ],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  // boxShadow: [
                  //   BoxShadow(
                  //     color: Colors.black26,
                  //     blurRadius: 8,
                  //     offset: Offset(2, 4),
                  //   ),
                  // ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Stack(
                    children: [
                      Positioned.fill(
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              colors: [
                                Colors.white.withOpacity(0.1),
                                Colors.white.withOpacity(0.05),
                              ],
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              "Automation ${index + 1}",
                              style: GoogleFonts.dmSans(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                            SizedBox(height: 10),
                            Row(
                              children: [
                                Icon(Icons.circle,
                                    color: Colors.greenAccent, size: 12),
                                SizedBox(width: 6),
                                Text(
                                  "Active",
                                  style: TextStyle(
                                      color: Colors.white70, fontSize: 14),
                                ),
                              ],
                            ),
                            Spacer(),
                            Align(
                              alignment: Alignment.bottomRight,
                              child: Icon(Icons.arrow_forward_ios,
                                  color: Colors.white70, size: 18),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildInvitationSection() {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: Row(
              children: [
                Text(
                  'Invite Friends',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
          SizedBox(height: 10),
          Container(
            padding: EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Invite & Earn',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Share your referral code and earn rewards',
                      style: TextStyle(color: Colors.white70, fontSize: 12),
                    ),
                  ],
                ),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: Colors.blue,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  child: Text('Invite'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
