import { Inter } from "next/font/google";
import { Button, buttonVariants } from "@/components/ui/button";
import { PlusCircleIcon, Loader2 } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: any) => {
  const [feedUrl, setFeedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [feedData, setFeedData] = useState([]);

  // const handleAddFeed = async () => {
  //   if (feedUrl) {
  //     setLoading(true);

  //     // TODO: change it to origin url
  //     const response = await fetch(
  //       `http://localhost:3000/api/hello?url=${feedUrl}`
  //     );
  //     const data = await response.json();

  //     localStorage.setItem(`${data.feed.docs}`, JSON.stringify(data.feed.items))
  //     setFeedData(data.feed.items);
  //     setLoading(false);
  //     setOpen(false);
  //   }
  // };

  // console.log(feedData);
  return (
    <main className={`${inter.className} grid lg:grid-cols-5 min-h-screen`}>
      <div className="pb-12">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Tools
            </h2>
            <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="/summary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Summarisation
              </Link>
              </Button>

              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Chat
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                </svg>
                Text to image
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                </svg>
                Audio to text
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          {/* <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button>
                <PlusCircleIcon className="mr-2 h-4 w-4" /> New Feed
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Feed</DialogTitle>
                <DialogDescription>
                  Copy and paste the feed url to import
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input
                    id="url"
                    placeholder="https://example.com/feed.xml"
                    value={feedUrl}
                    onChange={(e) => setFeedUrl(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={loading} onClick={handleAddFeed}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Import Feed
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Separator className="my-4" /> */}

          {/* {feedData.map((feed: any) => {
            return (
              <>
                <Card>
                  <CardHeader className="flex space-x-2 flex-row items-center">
                    <CardTitle>{feed.title}</CardTitle>
                    <Badge variant="destructive">{feed.creator}</Badge>

                  </CardHeader>
                  <CardContent>
                    <p>{feed.summary}</p>
                  </CardContent>
                </Card>
                <Separator/>
                <div className="pt-4"></div>
              </>
            );
          })} */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
