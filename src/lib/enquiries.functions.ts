import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us more about your project"),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");

    const supabaseUrl = process.env["VITE_SUPABASE_URL"];
    const supabaseKey = process.env["VITE_SUPABASE_PUBLISHABLE_KEY"];

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Database configuration is missing");
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabase.from("enquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      message: data.message,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  });
