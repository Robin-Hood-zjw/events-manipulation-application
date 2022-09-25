import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../DefaultLayout";
import EventsPage from "./MainArea/EventsPage/EventsPage";
import EventPage from "./MainArea/EventPage/EventPage";
import AttendeesPage from "./MainArea/AttendeesPage/AttendeesPage";
import CommentsPage from "./MainArea/CommentsPage/CommentsPage";
import CreateEventPage from "./MainArea/CreateEventPage/CreateEventPage";
import ProfilePage from "./MainArea/ProfilePage/ProfilePage";

const MainArea = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<EventsPage />} />

      <Route path="/events/:id" element={<EventPage />} />
      <Route path="/events/:id/attendees" element={<AttendeesPage />} />
      <Route path="/events/:id/comments" element={<CommentsPage />} />

      <Route path="create-event" element={<CreateEventPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default MainArea;
