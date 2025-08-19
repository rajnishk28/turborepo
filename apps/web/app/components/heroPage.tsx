"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="relative z-10 flex flex-col items-center min-h-screen justify-center text-center flex-grow px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                Build. Manage. Celebrate. 🎉
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10 animate-fade-in delay-150">
                A modern platform to manage your events, track schedules, and never
                miss a special moment — powered by{" "}
                <span className="font-semibold text-blue-600">Next.js</span> and{" "}
                <span className="font-semibold text-purple-600">Tailwind CSS</span>.
            </p>

            <div className="flex gap-4 animate-fade-in delay-300">
                <Link href="/events">
                    <button className="px-8 py-3 text-lg font-medium rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                        Go to Event Manager
                    </button>
                </Link>
                <Link href="#learn-more">
                    <button className="px-8 py-3 text-lg font-medium rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                        Learn More
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;