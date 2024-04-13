import { Button } from "@/components/ui/button";
import Layout from ".";
import { useState } from "react";

const Summary = () => {

  const [text, setText] = useState("");
  const [summarisedText, setSummarisedText] = useState("");
  const [loading, setLoading] = useState(false);

    
  const handleSummarisation = async () => {
      if (text) {
      setLoading(true);

      // TODO: change it to origin url
      const response = await fetch(
        `http://localhost:3000/api/hello`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        }
      );
      const data = await response.json();

      setSummarisedText(data.summary);
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
          <textarea
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
            placeholder="Paste the text to be summarised"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="rounded-md border bg-muted">
          <textarea
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
            placeholder="Paste the text to be summarised"
            value={summarisedText}
          ></textarea>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button disabled={loading} onClick={handleSummarisation}>Summarise</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Summary;
