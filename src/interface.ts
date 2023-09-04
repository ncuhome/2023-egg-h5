export interface QueryResponse {
  code: number;
  data: {
    max: number;
    records: Record[];
    remain: number;
  };
  msg: string;
}

interface Record {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  studentId: string;
}
