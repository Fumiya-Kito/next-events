import { connectDatabase, insertDocument, getAllDocuments } from "@/helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;
  console.log(req.body);

  let client;
  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: 'Connecting to database failed'});
    return;
  }
  
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    
    // validation
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
      ) {
      res.status(422).json({ messgae: "Invalid input." });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    
    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ messga: "Added comment. ", comment: newComment });
    } catch (err) {
      res.status(500).json({ message: 'Inserting data failed'});
    }
    

  } else if (req.method === "GET") {
    let documents;
    try {
      documents = await getAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: documents });
    } catch (err) {
      res.status(500).json({ message: 'Getting commnets failed'});
    }

  } else {
    res.status(405).json({ message: "Method Not Allowed" }); // POST メソッド以外は許可しない
  }
  console.log(client);
  client.close();
}

export default handler;
