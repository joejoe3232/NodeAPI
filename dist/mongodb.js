"use strict";
// src/app.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// MongoDB Atlas 連接字串
const uri = "mongodb+srv://joejoejoe3232:hut237kim762@node-cluster.jacuw.mongodb.net/?retryWrites=true&w=majority&appName=Node-Cluster";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient(uri);
        try {
            // 連接到 MongoDB Atlas
            yield client.connect();
            console.log("已成功連接到 MongoDB Atlas");
            // 選擇資料庫和集合
            const db = client.db("myDatabase");
            const usersCollection = db.collection("users");
            // 插入文件
            const newUser = { name: "Alice", age: 30, city: "New York" };
            const insertResult = yield usersCollection.insertOne(newUser);
            console.log("插入成功的文件：", insertResult.insertedId);
            // 查詢文件
            const findResult = yield usersCollection.findOne({ name: "Alice" });
            console.log("找到的文件：", findResult);
            // 更新文件
            const updateResult = yield usersCollection.updateOne({ name: "Alice" }, { $set: { age: 31 } });
            console.log("更新文件：", updateResult.modifiedCount);
            // 刪除文件
            const deleteResult = yield usersCollection.deleteOne({ name: "Alice" });
            console.log("刪除文件：", deleteResult.deletedCount);
        }
        catch (error) {
            console.error("操作失敗：", error);
        }
        finally {
            // 關閉連接
            yield client.close();
        }
    });
}
main().catch(console.error);
