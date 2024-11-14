// src/app.ts

import { MongoClient, Db, Collection } from 'mongodb';

// MongoDB Atlas 連接字串
const uri = "mongodb+srv://joejoejoe3232:hut237kim762@node-cluster.jacuw.mongodb.net/?retryWrites=true&w=majority&appName=Node-Cluster";

// 定義 User 資料結構
interface User {
  name: string;
  age: number;
  city: string;
}

async function main() {
  const client = new MongoClient(uri);

  try {
    // 連接到 MongoDB Atlas
    await client.connect();
    console.log("已成功連接到 MongoDB Atlas");

    // 選擇資料庫和集合
    const db: Db = client.db("myDatabase");
    const usersCollection: Collection<User> = db.collection("users");

    // 插入文件
    const newUser: User = { name: "Alice", age: 30, city: "New York" };
    const insertResult = await usersCollection.insertOne(newUser);
    console.log("插入成功的文件：", insertResult.insertedId);

    // 查詢文件
    const findResult = await usersCollection.findOne({ name: "Alice" });
    console.log("找到的文件：", findResult);

    // 更新文件
    const updateResult = await usersCollection.updateOne(
      { name: "Alice" },
      { $set: { age: 31 } }
    );
    console.log("更新文件：", updateResult.modifiedCount);

    // 刪除文件
    const deleteResult = await usersCollection.deleteOne({ name: "Alice" });
    console.log("刪除文件：", deleteResult.deletedCount);

  } catch (error) {
    console.error("操作失敗：", error);
  } finally {
    // 關閉連接
    await client.close();
  }
}

main().catch(console.error);
