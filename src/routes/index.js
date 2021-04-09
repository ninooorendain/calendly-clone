import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

//Components here
import Homepage from '../pages/static/Homepage';
import HomepageArabic from '../pages/static/Homepage/HomepageArabic'
import Login from '../pages/static/Login';
import Signup from '../pages/static/Signup';
import MeetingCalendar from '../pages/users/MeetingCalendar/MeetingCalendar';
import VendorDetails from '../pages/static/VendorDetails';
import SetupTimeSlot from '../pages/users/Setup/Availability';
import AvailabilitySettings from '../pages/users/Settings/AvailabilitySettings';
import Dashboard from '../pages/users/Dashboard'
import ScheduleEvents from '../pages/users/Dashboard/ScheduledEvents'
import ScheduleArabicEvents from '../pages/users/Dashboard/ScheduledEvents/ScheduleEventArabic'
import Billing from '../pages/users/Billing/';
import CreateEvent from '../pages/users/CreateEvent/CreateEvent';
import SuccessCreate from '../pages/users/CreateEvent/components/SuccessCreate';
import EventType from '../pages/users/EventType/EventType';
import CreateEventTypeOne from '../pages/users/EventType/components/CreateEventTypeOne';
import CreateEventTypeGroup from '../pages/users/EventType/components/CreateEventTypeGroup';
import EditEvent from '../pages/users/EditEvent/EditEvent';

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/ar" component={HomepageArabic} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/meeting-calendar" component={MeetingCalendar} />
      <Route exact path="/vendor" component={VendorDetails} />
      <Route exact path="/setup/timeslot" component={SetupTimeSlot} />
      <Route exact path="/availability/schedule" component={AvailabilitySettings} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/schedule_events" component={ScheduleEvents} />
      <Route exact path="/dashboard/schedule_events/ar" component={ScheduleArabicEvents} />
      <Route exact path="/user/billing" component={Billing} />
      <Route exact path="/user/make-event" component={CreateEvent} />
      <Route exact path="/user/edit-event" component={EditEvent} />
      <Route exact path="/user/event-type" component={EventType} />
      <Route exact path="/user/event-type/solo" component={CreateEventTypeOne} />
      <Route exact path="/user/event-type/group" component={CreateEventTypeGroup} />
      <Route exact path="/success/make-event" component={SuccessCreate} />
    </Switch>
  );
}

export default withRouter(routes);