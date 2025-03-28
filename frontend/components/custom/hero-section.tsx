// 'use client';

// import { useEffect, useMemo, useState } from "react";

// import { motion } from "framer-motion";

// import { MoveRight, PhoneCall } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const Hero5 = () => {
//   const [titleNumber, setTitleNumber] = useState(0);
//   const titles = useMemo(
//     () => ["amazing", "new", "wonderful", "beautiful", "smart"],
//     []
//   );

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       if (titleNumber === titles.length - 1) {
//         setTitleNumber(0);
//       } else {
//         setTitleNumber(titleNumber + 1);
//       }
//     }, 2000);
//     return () => clearTimeout(timeoutId);
//   }, [titleNumber, titles]);

//   return (
//     <div className="w-full p-5">
//       <div className="container mx-auto">
//         <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
//           <div>
//             <Button variant="secondary" size="sm" className="gap-4">
//               Read our launch article <MoveRight className="w-4 h-4" />
//             </Button>
//           </div>
//           <div className="flex gap-4 flex-col">
//             <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
//               <span className="text-spektr-cyan-50">This is something</span>
//               <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
//                 &nbsp;
//                 {titles.map((title, index) => (
//                   <motion.span
//                     key={index}
//                     className="absolute font-semibold"
//                     initial={{ opacity: 0, y: "-100" }}
//                     transition={{ type: "spring", stiffness: 50 }}
//                     animate={
//                       titleNumber === index
//                         ? {
//                           y: 0,
//                           opacity: 1,
//                         }
//                         : {
//                           y: titleNumber > index ? -150 : 150,
//                           opacity: 0,
//                         }
//                     }
//                   >
//                     {title}
//                   </motion.span>
//                 ))}
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
//               Managing a small business today is already tough. Avoid further
//               complications by ditching outdated, tedious trade methods. Our
//               goal is to streamline SMB trade, making it easier and faster than
//               ever.
//             </p>
//           </div>
//           <div className="flex flex-row gap-3">
//             <Button size="lg" className="gap-4" variant="outline">
//               Jump on a call <PhoneCall className="w-4 h-4" />
//             </Button>
//             <Button size="lg" className="gap-4">
//               Sign up here <MoveRight className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Bot, Sparkles, Cpu, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["adaptive", "intelligent", "powerful", "human-like", "insightful"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black p-6">
      <div className="container mx-auto flex flex-col items-center text-center gap-6">
        {/* Animated Highlighted Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button variant="secondary" size="sm" className="gap-3 bg-blue-700 text-white">
            Meet Your AI Companion <Sparkles className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Dynamic Changing Title */}
        {/* <motion.h1
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-blue-400 block">Imrabo:</span>
          <span className="relative inline-block mt-2 text-blue-300">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute left-0 w-full font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={titleNumber === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                Your {title} AI Assistant
              </motion.span>
            ))}
          </span>
        </motion.h1> */}

        <div className="flex gap-4 flex-col text-white">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50"><b>Imrabo:</b> AI & IOT</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-white">
            Imrabo isn't just an AI. It's a thinking, evolving assistant that helps you work smarter, automate tasks, and stay ahead.
       
            </p>
          </div>


       
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="gap-4 bg-blue-500 text-white hover:bg-blue-600">
            Start a Conversation <Mic className="w-5 h-5" />
          </Button>
          <Button size="lg" className="gap-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-700">
            Explore Features <Cpu className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
