import Task from "@/app/lib/models/models";
import connectMongoDB from "@/app/lib/mongodbConnection";
import { NextResponse } from "next/server";
import {writeFile} from "fs/promises";

export async function GET(request) {
    await connectMongoDB();

    const task = await Task.find({});
    return NextResponse.json({task});
}

export async function POST(request) {
    await connectMongoDB();

    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/uploads/${timeStamp}-${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/uploads/${timeStamp}-${image.name}`;
    
        const taskData = {
            title: `${formData.get("title")}`,
            description: `${formData.get("description")}`,
            category: `${formData.get("category")}`,
            author: `${formData.get("author")}`,
            image: `${imgUrl}`,
        };

        await Task.create(taskData);

    return NextResponse.json({ success: true, message: "Task Added" });

}
