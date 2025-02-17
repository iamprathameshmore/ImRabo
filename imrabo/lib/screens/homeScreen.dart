import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:imrabo/screens/profileScreen.dart';
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
            floating: true,
            pinned: false,
            elevation: 5,
            backgroundColor: Colors.black87,
            foregroundColor: Colors.white,
            title: Row(
              children: [
                Image(
                  image: AssetImage('assets/imrabo-logo.png'),
                  height: 25,
                ),
                SizedBox(
                  width: 10,
                ),
                Text(
                  'imrabo',
                  style: GoogleFonts.dmSans(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            actions: [
              IconButton(onPressed: () {}, icon: Icon(Icons.notifications)),
              SizedBox(width: 10),
              Container(
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.white, width: 2.5),
                    borderRadius: BorderRadius.circular(100)),
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ProfileScreen()));
                  },
                  child: SizedBox(
                    height: 40,
                    width: 40,
                    child: CircleAvatar(
                      backgroundColor: Colors.blueGrey,
                      backgroundImage: NetworkImage(
                          'https://avatars.githubusercontent.com/u/91453437?v=4'),
                      // backgroundImage: ,
                    ),
                  ),
                ),
              ),
              SizedBox(width: 15),
            ],
          ),
          SliverToBoxAdapter(
            child: Column(
              children: [
                _buildMonitoringCard(),
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
      // floatingActionButton: isFabVisible
      //     ? GestureDetector(
      //         onTap: () {},
      //         onDoubleTap: () {},
      //         onLongPress: () {
      //           showModalBottomSheet(
      //             context: context,
      //             shape: RoundedRectangleBorder(
      //               borderRadius:
      //                   BorderRadius.vertical(top: Radius.circular(16)),
      //             ),
      //             backgroundColor: Colors.white,
      //             isScrollControlled:
      //                 true, // Allows full-screen or flexible height
      //             builder: (context) => Padding(
      //               padding: EdgeInsets.only(
      //                 bottom: MediaQuery.of(context)
      //                     .viewInsets
      //                     .bottom, // Handle keyboard overlap
      //               ),
      //               child: Padding(
      //                 padding: const EdgeInsets.symmetric(
      //                     horizontal: 15, vertical: 10),
      //                 child: Column(
      //                   mainAxisSize: MainAxisSize.min,
      //                   children: [
      //                     // Top Handle for Dragging
      //                     Container(
      //                       width: 40,
      //                       height: 5,
      //                       decoration: BoxDecoration(
      //                         color: Colors.grey[400],
      //                         borderRadius: BorderRadius.circular(10),
      //                       ),
      //                     ),
      //                     SizedBox(height: 10),

      //                     // Live Status Header
      //                     Row(
      //                       mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //                       children: [
      //                         Text(
      //                           "Live Status",
      //                           style: GoogleFonts.poppins(
      //                               fontSize: 18, fontWeight: FontWeight.bold),
      //                         ),
      //                         Row(
      //                           children: [
      //                             Icon(Icons.circle,
      //                                 color: Colors.green,
      //                                 size: 12), // Live Indicator
      //                             SizedBox(width: 5),
      //                             Text(
      //                               "Online",
      //                               style: TextStyle(
      //                                   fontSize: 14, color: Colors.green),
      //                             ),
      //                           ],
      //                         ),
      //                       ],
      //                     ),

      //                     SizedBox(height: 15),

      //                     // Real-Time Data Display
      //                     _buildDataRow(
      //                         "Temperature", "22°C", Icons.thermostat),
      //                     _buildDataRow("Humidity", "60%", Icons.water_drop),
      //                     _buildDataRow("Device Status", "Active",
      //                         Icons.power_settings_new),
      //                     _buildDataRow(
      //                         "Battery", "85%", Icons.battery_charging_full),

      //                     SizedBox(height: 20),

      //                     // Close Button
      //                     ElevatedButton(
      //                       onPressed: () => Navigator.pop(context),
      //                       child: Text("Close"),
      //                       style: ElevatedButton.styleFrom(
      //                         backgroundColor: Colors.blueAccent,
      //                         shape: RoundedRectangleBorder(
      //                           borderRadius: BorderRadius.circular(10),
      //                         ),
      //                       ),
      //                     ),

      //                     SizedBox(height: 10),
      //                   ],
      //                 ),
      //               ),
      //             ),
      //           );
      //         },
      //         child: FloatingActionButton.extended(
      //           onPressed: () {},
      //           label: Text(
      //             'imrabo',
      //             style: GoogleFonts.dmSans(
      //                 fontWeight: FontWeight.bold, fontSize: 15),
      //           ),
      //           icon: Image(
      //             image: AssetImage('assets/imrabo-logo.png'),
      //             height: 25,
      //           ),
      //           shape: RoundedRectangleBorder(
      //               borderRadius: BorderRadius.all(Radius.circular(100))),
      //           backgroundColor: Colors.black,
      //           foregroundColor: Colors.white,
      //         ),
      //       )
      //     : null,
      // floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
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

  Widget _buildMonitoringCard() {
    return Container(
      padding: EdgeInsets.all(16),
      height: 150, // Adjusted for better layout
      margin: EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.grey.shade600,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Center(
        child: Text(
          'Real-Time Monitoring',
          style: GoogleFonts.dmSans(
            fontSize: 18,
            fontWeight: FontWeight.w600,
            color: Colors.white,
          ),
        ),
      ),
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
      "Speaker",
      "Light",
      "Smart Lock",
      "Router",
      "Switch"
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

          // SizedBox(height: 8),

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
                    backgroundColor: Colors.indigoAccent.shade700,
                    radius: 24,
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
                icon: Icon(Icons.add, size: 28),
              ),
            ],
          ),
        ),
        SizedBox(height: 12), // Added spacing for better separation
        SizedBox(
          height: 150,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: 5,
            padding:
                const EdgeInsets.only(left: 20), // Prevents first card cut-off
            itemBuilder: (context, index) {
              return Container(
                width: 180, // Ensures a proper card width
                margin: const EdgeInsets.only(right: 12), // Space between cards
                child: Card(
                  color: Colors.grey,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  elevation: 0,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Automation ${index + 1}",
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(height: 8),
                        Row(
                          children: [
                            Icon(
                              Icons.circle,
                              color: Colors.green,
                              size: 12,
                            ),
                            SizedBox(width: 6),
                            Text("Online"),
                          ],
                        ),
                      ],
                    ),
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
