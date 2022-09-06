import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from '../DefaultLayout'
import EventsPage from "./MainArea/EventPage/EventsPage";
import EventPage from './MainArea/EventPage/EventPage'
import AttendeesPage from './MainArea/AttendeesPage/AttendeesPage'
import CommentsPage from './MainArea/CommentsPage/CommentsPage'
import CreateEventPage from "./MainArea/CreateEventPage/CreateEventPage";
import ProfilePage from "./MainArea/ProfilePage/ProfilePage";

const MainArea = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/events" element={<Layout />}>
        <Route index element={<EventsPage />}>
          <Route path=":id" element={<EventPage />}>
            <Route path=":id/attendees" element={<AttendeesPage />}/>
            <Route path=":id/comments" element={<CommentsPage />}/>
          </Route>
        </Route>
      </Route>

      <Route path="/create-event" element={<CreateEventPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
  </BrowserRouter>
  );
};

export default MainArea;
