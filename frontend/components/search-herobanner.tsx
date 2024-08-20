"use client";
import React from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema of Form
const formSchema = z.object({
  searchQuery: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(25),
});

interface SearchBoxHeroBannerProps {
  formLabel?: string;
  formDescription?: string;
}

const SearchBoxHeroBanner = ({
  formLabel = 'Search event by typing in box below',
  formDescription,
}: SearchBoxHeroBannerProps) => {
  // Defining Router hook
  const router = useRouter();

  // Defining form and using initial values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  // Defining submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/events?search=" + values.searchQuery);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex justify-start items-end gap-2"
        >
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="text-black">
                {formLabel && <FormLabel className="text-lrg font-bold">{formLabel}</FormLabel>}
                <FormControl>
                  <Input placeholder="Search an event..." {...field} />
                </FormControl>
                {formDescription && (
                  <FormDescription>{formDescription}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="basic" type="submit" className="text-1xl">
            Search Event
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBoxHeroBanner;
