export const participants = [
  { rank: 1, chessNumber: 'PC-1042', name: 'Ananya Menon', marks: 96, event: 'Political Debate' },
  { rank: 2, chessNumber: 'PC-1187', name: 'Rahul Krishnan', marks: 91, event: 'Political Debate' },
  { rank: 3, chessNumber: 'PC-1019', name: 'Meera Iyer', marks: 88, event: 'Political Debate' },
  { rank: 4, chessNumber: 'PC-1264', name: 'Arjun Das', marks: 84, event: 'Political Debate' },
  { rank: 5, chessNumber: 'PC-1098', name: 'Sara Thomas', marks: 79, event: 'Political Debate' },
  { rank: 1, chessNumber: 'PC-1031', name: 'Dev Nair', marks: 94, event: 'Policy Pitch' },
  { rank: 2, chessNumber: 'PC-1212', name: 'Nila Joseph', marks: 89, event: 'Policy Pitch' },
  { rank: 3, chessNumber: 'PC-1074', name: 'Kiran Babu', marks: 85, event: 'Policy Pitch' },
  { rank: 1, chessNumber: 'PC-1145', name: 'Tara Varma', marks: 92, event: 'Constitutional Quiz' },
  { rank: 2, chessNumber: 'PC-1088', name: 'Ishaan Paul', marks: 87, event: 'Constitutional Quiz' },
  { rank: 3, chessNumber: 'PC-1251', name: 'Laya George', marks: 82, event: 'Constitutional Quiz' },
]

export const leaderboardEvents = {
  'political-debate': {
    title: 'Political Debate',
    updated: 'Nov 18, 2026',
    participants: [
      { rank: 1, chessNumber: 'PC-1042', initials: 'AM', name: 'Ananya Menon', marks: 96, qualified: true, breakdown: [{ label: 'Argumentation & Policy Depth', score: 29, max: 30 }, { label: 'Rebuttal & Cross-Examination', score: 24, max: 25 }, { label: 'Oratory & Delivery', score: 24, max: 25 }, { label: 'Structure & Time Discipline', score: 19, max: 20 }] },
      { rank: 2, chessNumber: 'PC-1187', initials: 'RK', name: 'Rahul Krishnan', marks: 91, qualified: true, breakdown: [{ label: 'Argumentation & Policy Depth', score: 27, max: 30 }, { label: 'Rebuttal & Cross-Examination', score: 23, max: 25 }, { label: 'Oratory & Delivery', score: 23, max: 25 }, { label: 'Structure & Time Discipline', score: 18, max: 20 }] },
      { rank: 3, chessNumber: 'PC-1019', initials: 'MI', name: 'Meera Iyer', marks: 88, qualified: true, breakdown: [{ label: 'Argumentation & Policy Depth', score: 26, max: 30 }, { label: 'Rebuttal & Cross-Examination', score: 22, max: 25 }, { label: 'Oratory & Delivery', score: 22, max: 25 }, { label: 'Structure & Time Discipline', score: 18, max: 20 }] },
      { rank: 4, chessNumber: 'PC-1264', initials: 'AD', name: 'Arjun Das', marks: 84, qualified: true, breakdown: [{ label: 'Argumentation & Policy Depth', score: 25, max: 30 }, { label: 'Rebuttal & Cross-Examination', score: 21, max: 25 }, { label: 'Oratory & Delivery', score: 21, max: 25 }, { label: 'Structure & Time Discipline', score: 17, max: 20 }] },
      { rank: 5, chessNumber: 'PC-1098', initials: 'ST', name: 'Sara Thomas', marks: 79, qualified: false, breakdown: [{ label: 'Argumentation & Policy Depth', score: 24, max: 30 }, { label: 'Rebuttal & Cross-Examination', score: 19, max: 25 }, { label: 'Oratory & Delivery', score: 20, max: 25 }, { label: 'Structure & Time Discipline', score: 16, max: 20 }] },
    ],
  },
  'policy-pitch': {
    title: 'Policy Pitch',
    updated: 'Nov 18, 2026',
    participants: [
      { rank: 1, chessNumber: 'PP-2014', initials: 'VN', name: 'Vikram Nair', marks: 94, qualified: true, breakdown: [{ label: 'Problem Framing', score: 28, max: 30 }, { label: 'Feasibility & Fiscal Model', score: 24, max: 25 }, { label: 'Presentation Clarity', score: 23, max: 25 }, { label: 'Q&A Defense', score: 19, max: 20 }] },
      { rank: 2, chessNumber: 'PP-2088', initials: 'DS', name: 'Diya Suresh', marks: 89, qualified: true, breakdown: [{ label: 'Problem Framing', score: 27, max: 30 }, { label: 'Feasibility & Fiscal Model', score: 22, max: 25 }, { label: 'Presentation Clarity', score: 22, max: 25 }, { label: 'Q&A Defense', score: 18, max: 20 }] },
      { rank: 3, chessNumber: 'PP-2105', initials: 'KM', name: 'Karthik Menon', marks: 85, qualified: true, breakdown: [{ label: 'Problem Framing', score: 25, max: 30 }, { label: 'Feasibility & Fiscal Model', score: 21, max: 25 }, { label: 'Presentation Clarity', score: 21, max: 25 }, { label: 'Q&A Defense', score: 18, max: 20 }] },
      { rank: 4, chessNumber: 'PP-2142', initials: 'NP', name: 'Neha Pillai', marks: 78, qualified: false, breakdown: [{ label: 'Problem Framing', score: 23, max: 30 }, { label: 'Feasibility & Fiscal Model', score: 19, max: 25 }, { label: 'Presentation Clarity', score: 20, max: 25 }, { label: 'Q&A Defense', score: 16, max: 20 }] },
    ],
  },
  'model-parliament': {
    title: 'Model Parliament',
    updated: 'Nov 18, 2026',
    participants: [
      { rank: 1, chessNumber: 'MP-3011', initials: 'RS', name: 'Rohan Sharma', marks: 97, qualified: true, breakdown: [{ label: 'Legislative Drafting', score: 29, max: 30 }, { label: 'Parliamentary Procedure', score: 25, max: 25 }, { label: 'Floor Debate & Rhetoric', score: 24, max: 25 }, { label: 'Coalition Building', score: 19, max: 20 }] },
      { rank: 2, chessNumber: 'MP-3049', initials: 'FA', name: 'Fathima Ashraf', marks: 92, qualified: true, breakdown: [{ label: 'Legislative Drafting', score: 28, max: 30 }, { label: 'Parliamentary Procedure', score: 23, max: 25 }, { label: 'Floor Debate & Rhetoric', score: 23, max: 25 }, { label: 'Coalition Building', score: 18, max: 20 }] },
      { rank: 3, chessNumber: 'MP-3077', initials: 'AJ', name: 'Abhinav Joseph', marks: 87, qualified: true, breakdown: [{ label: 'Legislative Drafting', score: 26, max: 30 }, { label: 'Parliamentary Procedure', score: 22, max: 25 }, { label: 'Floor Debate & Rhetoric', score: 21, max: 25 }, { label: 'Coalition Building', score: 18, max: 20 }] },
    ],
  },
}

export const teamStandings = [
  {
    id: 'ra', name: 'Republic Assembly', initials: 'RA', tone: 'olive',
    leaders: ['Ananya Menon', 'Rahul Krishnan'], delta: '+18 pts',
    eventSummary: '6 events · 1st in Policy Pitch',
    rosterNote: '36 active delegates · Unbeaten in Stage 02 Policy Pitch preliminary rounds.',
    leaderDetails: [
      { name: 'Ananya Menon', role: 'Chief Whip & Policy Lead', id: 'POL-2026-104' },
      { name: 'Rahul Krishnan', role: 'Parliamentary Floor Captain', id: 'POL-2026-109' },
    ],
    events: [
      { name: 'Policy Pitch', stage: 'STAGE_02', points: 62, max: 65, placement: '1st Place' },
      { name: 'Campus Mock Parliament', stage: 'STAGE_02', points: 54, max: 60, placement: '1st Place' },
      { name: 'Political Debate', stage: 'STAGE_02', points: 48, max: 55, placement: '2nd Place' },
      { name: 'Constitutional Quiz', stage: 'STAGE_01', points: 44, max: 50, placement: '2nd Place' },
      { name: 'Diplomacy Desk', stage: 'STAGE_01', points: 40, max: 45, placement: '1st Place' },
      { name: 'Opening Plenary Brief', stage: 'STAGE_01', points: 36, max: 40, placement: 'Merit' },
    ],
  },
  {
    id: 'ff', name: 'The Federal Forum', initials: 'FF', tone: 'coral',
    leaders: ['Meera Iyer', 'Arjun Das'], delta: '+14 pts',
    eventSummary: '6 events · 1st in Const. Quiz',
    rosterNote: '34 active delegates · Highest Stage 01 Constitutional Quiz score across all contingents.',
    leaderDetails: [
      { name: 'Meera Iyer', role: 'Constitutional Quiz Captain', id: 'POL-2026-121' },
      { name: 'Arjun Das', role: 'Lead Debater & Strategist', id: 'POL-2026-127' },
    ],
    events: [
      { name: 'Policy Pitch', stage: 'STAGE_02', points: 55, max: 65, placement: '2nd Place' },
      { name: 'Campus Mock Parliament', stage: 'STAGE_02', points: 49, max: 60, placement: '2nd Place' },
      { name: 'Political Debate', stage: 'STAGE_02', points: 46, max: 55, placement: '3rd Place' },
      { name: 'Constitutional Quiz', stage: 'STAGE_01', points: 48, max: 50, placement: '1st Place' },
      { name: 'Diplomacy Desk', stage: 'STAGE_01', points: 35, max: 45, placement: '3rd Place' },
      { name: 'Opening Plenary Brief', stage: 'STAGE_01', points: 34, max: 40, placement: 'Merit' },
    ],
  },
  {
    id: 'cc', name: 'Civic Circle', initials: 'CC', tone: 'mustard',
    leaders: ['Sara Thomas', 'Dev Nair'], delta: '+11 pts',
    eventSummary: '6 events · 1st in Pol. Debate',
    rosterNote: '32 active delegates · Top-ranked rebuttal team in Stage 02 British Parliamentary Debate.',
    leaderDetails: [
      { name: 'Sara Thomas', role: 'Lead Opposition Speaker', id: 'POL-2026-142' },
      { name: 'Dev Nair', role: 'Policy Research Coordinator', id: 'POL-2026-148' },
    ],
    events: [
      { name: 'Policy Pitch', stage: 'STAGE_02', points: 48, max: 65, placement: '3rd Place' },
      { name: 'Campus Mock Parliament', stage: 'STAGE_02', points: 45, max: 60, placement: '3rd Place' },
      { name: 'Political Debate', stage: 'STAGE_02', points: 51, max: 55, placement: '1st Place' },
      { name: 'Constitutional Quiz', stage: 'STAGE_01', points: 40, max: 50, placement: '3rd Place' },
      { name: 'Diplomacy Desk', stage: 'STAGE_01', points: 37, max: 45, placement: '2nd Place' },
      { name: 'Opening Plenary Brief', stage: 'STAGE_01', points: 30, max: 40, placement: 'Qualified' },
    ],
  },
  {
    id: 'uc', name: 'Union Collective', initials: 'UC', tone: 'red',
    leaders: ['Nila Joseph', 'Kiran Babu'], delta: '+9 pts',
    eventSummary: '6 events · 4 podium finishes',
    rosterNote: '31 active delegates · Strong momentum entering afternoon Mock Parliament floor sessions.',
    leaderDetails: [
      { name: 'Nila Joseph', role: 'Legislative Drafting Lead', id: 'POL-2026-163' },
      { name: 'Kiran Babu', role: 'Diplomacy Desk Envoy', id: 'POL-2026-170' },
    ],
    events: [
      { name: 'Policy Pitch', stage: 'STAGE_02', points: 45, max: 65, placement: '4th Place' },
      { name: 'Campus Mock Parliament', stage: 'STAGE_02', points: 44, max: 60, placement: '4th Place' },
      { name: 'Political Debate', stage: 'STAGE_02', points: 43, max: 55, placement: '4th Place' },
      { name: 'Constitutional Quiz', stage: 'STAGE_01', points: 39, max: 50, placement: '4th Place' },
      { name: 'Diplomacy Desk', stage: 'STAGE_01', points: 34, max: 45, placement: '4th Place' },
      { name: 'Opening Plenary Brief', stage: 'STAGE_01', points: 33, max: 40, placement: 'Merit' },
    ],
  },
]

export const events = [
  { time: '09:30', title: 'Policy Pitch', status: 'Current', venue: 'Main Auditorium' },
  { time: '11:00', title: 'Constitutional Quiz', status: 'Upcoming', venue: 'Seminar Hall 1' },
  { time: '13:30', title: 'Political Debate', status: 'Upcoming', venue: 'Open Forum' },
  { time: '16:00', title: 'Campus Mock Parliament', status: 'Upcoming', venue: 'Central Court' },
]

export const festivalStages = [
  {
    stageNumber: '01',
    eyebrow: 'Completed stage',
    title: 'Opening & registrations',
    subtitle: 'Delegate credentialing, keynote address, and introductory policy briefings.',
    dateLabel: 'Day 01 • Session A',
    isLive: false,
    baseCompleted: 4,
    totalEvents: 4,
    events: [
      { id: 's1-01', number: '01', time: '09:00', status: 'COMPLETED', title: 'Delegate Check-in & Kits', venue: 'Reception Pavilion', moderator: 'Secretariat Desk', duration: '60 mins', summary: 'Verification of permanent participant IDs and distribution of debate dossiers.' },
      { id: 's1-02', number: '02', time: '10:30', status: 'COMPLETED', title: 'Inaugural Keynote Address', venue: 'Main Auditorium', moderator: 'Dr. Meera Nair', duration: '75 mins', summary: 'Opening plenary on contemporary democratic governance and youth policy leadership.' },
      { id: 's1-03', number: '03', time: '12:15', status: 'COMPLETED', title: 'Rules & Adjudication Briefing', venue: 'Seminar Hall 1', moderator: 'Chief Adjudicator Panel', duration: '45 mins', summary: 'Mandatory procedural walkthrough for parliamentary debate and policy pitch teams.' },
      { id: 's1-04', number: '04', time: '14:30', status: 'COMPLETED', title: 'Icebreaker Policy Mixer', venue: 'Central Court', moderator: 'Organising Committee', duration: '90 mins', summary: 'Cross-college networking session and draw release for Stage 02 preliminary fixtures.' },
    ],
  },
  {
    stageNumber: '02',
    eyebrow: 'Current stage',
    title: 'Preliminary rounds',
    subtitle: 'Qualifying policy, quiz, debate, and parliamentary fixtures across campus venues.',
    dateLabel: 'Day 02 • Session B',
    isLive: true,
    baseCompleted: 4,
    totalEvents: 6,
    events: [
      { id: 's2-01', number: '01', time: '09:30', status: 'CURRENT', title: 'Policy Pitch', venue: 'Main Auditorium', moderator: 'Prof. Arvind Krishnan', duration: '90 mins', summary: 'Shortlisted teams present 7-minute actionable public policy proposals before the jury.' },
      { id: 's2-02', number: '02', time: '11:00', status: 'UPCOMING', title: 'Constitutional Quiz', venue: 'Seminar Hall 1', moderator: 'Adv. Rohini Menon', duration: '90 mins', summary: 'Written and rapid-fire preliminary rounds testing constitutional history and jurisprudence.' },
      { id: 's2-03', number: '03', time: '13:30', status: 'UPCOMING', title: 'Political Debate', venue: 'Open Forum', moderator: 'Siddharth Verma', duration: '120 mins', summary: 'British Parliamentary format qualifying rounds on fiscal federalism and digital governance.' },
      { id: 's2-04', number: '04', time: '16:00', status: 'UPCOMING', title: 'Campus Mock Parliament', venue: 'Central Court', moderator: 'Speaker’s Chair', duration: '120 mins', summary: 'Simulated legislative debate, zero-hour interventions, and private member bill readings.' },
    ],
  },
  {
    stageNumber: '03',
    eyebrow: 'Upcoming stage',
    title: 'Grand finals & awards',
    subtitle: 'Championship debates, ministerial simulation finale, and valedictory ceremony.',
    dateLabel: 'Day 03 • Session C',
    isLive: false,
    baseCompleted: 0,
    totalEvents: 4,
    events: [
      { id: 's3-01', number: '01', time: '10:00', status: 'UPCOMING', title: 'Policy Pitch Grand Finale', venue: 'Main Auditorium', moderator: 'Jury Bench A', duration: '90 mins', summary: 'Top 6 qualifying teams defend their policy whitepapers in live Q&A.' },
      { id: 's3-02', number: '02', time: '12:00', status: 'UPCOMING', title: 'Championship Debate', venue: 'Main Auditorium', moderator: 'Grand Final Panel', duration: '90 mins', summary: 'Final four teams compete for the rolling festival championship trophy.' },
      { id: 's3-03', number: '03', time: '14:30', status: 'UPCOMING', title: 'Mock Parliament Floor Vote', venue: 'Central Court', moderator: 'Speaker’s Chair', duration: '90 mins', summary: 'Final clause-by-clause voting and resolution adoption.' },
      { id: 's3-04', number: '04', time: '17:00', status: 'UPCOMING', title: 'Valedictory & Prize Distribution', venue: 'Main Auditorium', moderator: 'Festival Secretariat', duration: '60 mins', summary: 'Announcement of stage winners, best parliamentarian awards, and closing remarks.' },
    ],
  },
]
