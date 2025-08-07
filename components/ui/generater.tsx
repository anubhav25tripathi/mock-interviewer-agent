"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface InterviewFormProps {
  userName: string;
  userId: string;
}

interface FormData {
  type: string;
  role: string;
  level: string;
  techstack: string;
  amount: number;
}

export default function InterviewForm({ userName, userId }: InterviewFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const requestBody = {
      ...data,
      userid: userId, // attach userId from props
    };

    try {
      const response = await fetch("/api/vapi/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Request failed");

      const result = await response.json();
      console.log("Interview submitted successfully:", result);

      reset();
      alert("Interview request submitted!");
    } catch (error) {
      console.error("Error submitting interview request:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-md p-8 shadow-2xl border border-white/20">
        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Hi {userName} 👋
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Fill in the details below to generate your interview questions.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Job Role (e.g., Frontend Developer)"
            {...register("role")}
            className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            {...register("level")}
            className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Experience Level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
          <input
            type="text"
            placeholder="Focus of Questions (e.g., Coding, System Design)"
            {...register("type")}
            className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Tech Stack (e.g., React, Node.js)"
            {...register("techstack")}
            className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Number of Questions (e.g., 5)"
            {...register("amount", { valueAsNumber: true })}
            className="w-full rounded-lg border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors"
          >
            Generate Questions
          </button>
        </form>
      </div>
    </div>
  );
}
