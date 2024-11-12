'use server';

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import slugify from 'slugify'

export const createPitch = async (
  state: any,
  formData: FormData,
  pitch: string
) => {
  const session = await auth();

  if (!session) {
    return parseServerActionResponse({ error: 'Not signed in', status: 'ERROR' })
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(formData)
      .filter(([key]) => key !== "pitch") as [string, any][]
  );
  const slug = slugify(title as string, { lower: true })

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error(error);
    return parseServerActionResponse({ error: JSON.stringify(error), status: 'ERROR' })
  }
}