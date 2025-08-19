"use client";

import React, { useEffect, useState } from "react";

type Event = {
  id: number;
  name: string;
  date: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) setEvents(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName.trim() || !eventDate) return;

    const newEvent: Event = {
      id: Date.now(),
      name: eventName.trim(),
      date: eventDate,
    };

    setEvents([...events, newEvent]);
    setEventName("");
    setEventDate("");
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  const filteredEvents = events.filter((ev) =>
    ev.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">📅 Event Manager</h1>

      {/* Form */}
      <form
        onSubmit={addEvent}
        className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Event
        </button>
      </form>

      {/* Search */}
      {events.length > 0 && (
        <input
          type="text"
          placeholder="🔍 Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {/* List */}
      <ul className="space-y-3">
        {filteredEvents.length === 0 && (
          <p className="text-gray-500 text-center">No events found.</p>
        )}

        {filteredEvents.map((ev) => (
          <li
            key={ev.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-medium">{ev.name}</p>
              <p className="text-sm text-gray-600">{ev.date}</p>
            </div>
            <button
              onClick={() => deleteEvent(ev.id)}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
