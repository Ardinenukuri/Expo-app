export type CompetenceCode = 'BE' | 'AE' | 'ME' | 'EE';


export interface ClassProfileStudent {
  studentId: string;
  name: string;
  competence: CompetenceCode;
}

export interface ClassProfileStrand {
  strandId: string;
  strand: string; 
  workCovered: number;
  students: ClassProfileStudent[];
}

export interface ClassProfile {
  strands: ClassProfileStrand[];
}


export interface StudentStrandDetail {
  competence: CompetenceCode;
  progress: number;
}

export interface StudentStrands {
  letterIdentification: StudentStrandDetail;
  letterNaming: StudentStrandDetail;
  letterFormation: StudentStrandDetail;
  phonemicAwareness: StudentStrandDetail;
  [key: string]: StudentStrandDetail;
}

export interface Student {
  id: string;
  name: string;
  strands: StudentStrands;
}