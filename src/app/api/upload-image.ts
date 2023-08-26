import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Bad method
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  // Get file
  const reqFormData = await req.formData();
  const file = reqFormData.get("file") as File | undefined;

  // File is empty
  if (!file) {
    return NextResponse.json({ error: "Empty file" }, { status: 204 });
  }

  // Send POST Request to Cloudinary
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`;
  const api_key = `${process.env.CLOUDINARY_API_KEY}`;
  const upload_preset = `${process.env.CLOUDINARY_UPLOAD_PRESET}`;
  const timestamp = new Date().getTime().toString();

  const formData = new FormData();
  formData.append("api_key", api_key);
  formData.append("file", file);
  formData.append("public_id", `${file.name}_${timestamp}`);
  formData.append("timestamp", timestamp);
  formData.append("upload_preset", upload_preset);

  const res = await fetch(url, { method: "POST", body: formData });
  const resJSON = await res.json();

  // Upload error
  if (!res.ok) {
    return NextResponse.json({ error: "Upload image error" }, { status: 400 });
  }

  // Upload Success
  return NextResponse.json(
    { message: "Upload image succeed", imageUrl: resJSON.url },
    { status: 200 },
  );
};
