import { ScheduleEvent } from "@Types";
import { firestore } from "firebase";

import { db, throwOrGetCurrentUserUID } from "../Core";

export const addScheduleEvent = async (scheduleEvent: ScheduleEvent) => {
  const uid = throwOrGetCurrentUserUID();
  const docRef = await db.collection(`userData/${uid}/schedule`).add(scheduleEvent);
  return { id: docRef.id };
};

export const deleteScheduleEvent = async (scheduleEventId: string) => {
  const uid = throwOrGetCurrentUserUID();
  const docRef = await db.collection(`userData/${uid}/schedule`).doc(scheduleEventId);
  await docRef.delete();
};

export const fetchUserDataSchedule = async (): Promise<Record<string, ScheduleEvent>> => {
  const uid = throwOrGetCurrentUserUID();
  const querySnapshot = await db.collection(`userData/${uid}/schedule`).get();
  const scheduleData: Record<string, ScheduleEvent> = {};
  querySnapshot.forEach((doc) => {
    const { title, description, startDatetime, endDatetime, routine } = doc.data();

    scheduleData[doc.id] = {
      title,
      description,
      startDatetime: new firestore.Timestamp(
        startDatetime.seconds,
        startDatetime.nanoseconds,
      ).toDate(),
      endDatetime: new firestore.Timestamp(
        endDatetime.seconds,
        endDatetime.nanoseconds,
      ).toDate(),
      routine,
    };
  });
  return scheduleData;
};
