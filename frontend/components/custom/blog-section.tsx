import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Blog2 = () => {
  const blogs = [
    {
      title: "The Future of AI in Business Transactions",
      description:
        "Discover how artificial intelligence is reshaping financial transactions and business automation.",
      category: "Technology",
      author: "Sarah Thompson",
      image: "https://source.unsplash.com/800x600/?ai,technology",
    },
    {
      title: "How Blockchain is Revolutionizing Trade",
      description:
        "Explore the impact of blockchain technology in securing and optimizing global trade operations.",
      category: "Finance",
      author: "Michael Carter",
      image: "https://source.unsplash.com/800x600/?blockchain,finance",
    },
    {
      title: "Scaling Your Business with Smart Strategies",
      description:
        "From automation to financial planning, learn how to scale your business efficiently.",
      category: "Business",
      author: "Emily Davis",
      image: "https://source.unsplash.com/800x600/?business,success",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 p-5">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Latest Insights from Imrabo
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
              <div className="bg-muted rounded-md aspect-video">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Badge>{blog.category}</Badge>
                <p className="flex flex-row gap-2 text-sm items-center">
                  <span className="text-muted-foreground">By</span>{" "}
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://source.unsplash.com/100x100/?person" />
                    <AvatarFallback>AU</AvatarFallback>
                  </Avatar>
                  <span>{blog.author}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="max-w-3xl text-2xl tracking-tight">{blog.title}</h3>
                <p className="max-w-3xl text-muted-foreground text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
