import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";
const supabaseServiceKey = "";
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export const fetchFileFromSupabase = async (filePath) => {
  //const supabaseUrl = PUBLIC_SUPABASE_URL;
  //const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;
  const fullURL = `${supabaseUrl}/storage/v1/object/${filePath}`;
  console.log(fullURL);

  const session = await supabase.auth.getSession();
  console.log("session: " + JSON.stringify(session));

  const { data, error } = await supabase.storage
    .from("bookswap_images")
    .download("private/e2d7023d-698d-412c-8554-a52f5f8cfe8b0.47219582655577996.jpg");

  //      const response = await fetch(fullURL, {
  //        headers: {
  //          apikey: supabaseKey,
  //          Authorization: `Bearer ${supabase.auth.getAuth()}`,
  //        },
  //      });

  console.log("data: " + data);
  console.log("data: " + JSON.stringify(data));

  if (!error) {
    return data;
  } else {
    console.error("Error fetching file:", error);
  }
};

export const blobToBase64 = async (blob) => {
  //const buffer = Buffer.from(await blob.arrayBuffer());
  //r/eturn buffer.toString("base64");
};
