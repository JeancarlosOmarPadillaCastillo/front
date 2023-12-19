export interface Program {
  AttendanceResponseDto: {
    id_attendance: number;
    id_activities: number;
    id_adolescente: number;
    attendance: string;
    date: string;

    active: string;
  };
  TeenResponseDto: {
    id_teen: number;
    name: string;
    surnameFather: string;
    surnameMother: string;
    dni: string;
    phoneNumber: string;
    address: string;
    email: string;
    birthade: Date;
    gender: string;
    id_operativeunit: number;
    crimeCommitted: string;
    id_attorney: number;
    codubi: string;
    status: string;
  };
  ActivitiesResponseDto:{

    id_activities:number;
    name: string;

  }
}
