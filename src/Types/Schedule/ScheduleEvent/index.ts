export interface ScheduleEvent {
  title: string;
  description: string;
  routine?: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  startDatetime: Date;
  endDatetime: Date;
}
