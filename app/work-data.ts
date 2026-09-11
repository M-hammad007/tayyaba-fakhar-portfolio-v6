export type Stage = { title: string; body: string; outputs: string[] };
export type Project = {
 slug: string; number: string; kicker: string; title: string; summary: string; role: string; scope: string[];
 context: string; problem: string; hypothesis: string; audience: string; discovery: string[]; painPoints: string[]; opportunities: string[]; ia: string[]; journey: string[]; stages: Stage[];
 decisions: string[]; system: string[]; outcome: string; note: string; accent: string; visual: string;
};

export const projects: Project[] = [
{
 slug:'f2',number:'01',kicker:'AI / ENTERPRISE',title:'F2 — Making enterprise AI understandable',
 summary:'A product-design narrative for turning powerful AI and operational workflows into a clear, trustworthy experience.',
 role:'Lead UI/UX & Visual Design',scope:['Product UX','Information architecture','AI workflows','UI systems'],
 context:'F2 is framed around the kind of AI and digital-transformation work represented in Tayyaba’s professional experience: complex capabilities, multiple stakeholders and a need to make automation legible.',
 problem:'The challenge was not simply to make an AI interface look modern. Users need to understand what the system knows, what it is doing, what requires their decision and what happens next. Without that mental model, even capable automation can feel risky.',
 hypothesis:'If the experience separates intent, system context, automation and human approval into recognizable layers, users will move through complex workflows with greater confidence and less cognitive friction.',
 audience:'Operational teams, decision makers and internal product stakeholders who need to review, approve and act on AI-assisted work.',
 discovery:['Users need to distinguish what the AI decided from what they still control.','Evidence and system status need to be visible at the moment of review.','Exceptions are more important than the happy path for trust.'],painPoints:['Unclear ownership between automation and people','Too much technical context at once','Low visibility into why a recommendation was made'],opportunities:['Make recommendation → evidence → action a repeatable pattern','Expose confidence and status without overwhelming the user','Design review and recovery states before edge cases arrive'],ia:['Workspace','Task / queue','Recommendation','Evidence','Review / approval','Outcome / history'], journey:['Arrive with a task or exception','Understand context and system recommendation','Inspect supporting evidence','Approve, edit or route the action','Monitor outcome and return to the next priority'],
 stages:[
  {title:'01 — Discover',body:'Start from user intent rather than the AI feature list. Identify the moments where people need explanation, control or reassurance.',outputs:['Task framing','User questions','Risk moments']},
  {title:'02 — Structure',body:'Create a hierarchy that makes status, recommendation, evidence and next action visually distinct.',outputs:['Information architecture','Decision hierarchy','Flow map']},
  {title:'03 — Prototype',body:'Prototype the highest-risk states first: uncertainty, exceptions, approvals and handoffs between people and automation.',outputs:['Interactive flows','Edge states','Approval patterns']},
  {title:'04 — Systemize',body:'Translate successful patterns into reusable components so future AI workflows feel like one coherent product.',outputs:['Component model','Tokens','Interaction rules']}
 ],
 decisions:['Show the recommendation before secondary detail, but keep evidence one step away.','Make human approval explicit instead of visually blending it into automation.','Use progressive disclosure for technical context.','Treat empty, loading, error and confidence states as first-class product design.'],
 system:['Command surfaces','AI recommendation cards','Evidence drawers','Approval / edit states','Status and confidence language'],
 outcome:'The portfolio story positions F2 around clarity, trust and scalable product language — a stronger proof of systems thinking than a collection of isolated screens.',
 note:'Portfolio synthesis based on Tayyaba’s professional experience and available project context. No unverified business metrics are presented.',accent:'AI',visual:'ai'
},
{
 slug:'oqaabi',number:'02',kicker:'AI / BILINGUAL',title:'Oqaabi — An Arabic / English AI assistant',
 summary:'Designing a bilingual AI experience where language, directionality and conversation stay calm even as the system becomes powerful.',
 role:'UI/UX & Visual Design',scope:['Mobile UX','Arabic / English UX','Conversation design','Visual system'],
 context:'Oqaabi is presented as a bilingual AI experience. The design problem expands beyond translation: users should feel that both language modes are equally intentional, readable and complete.',
 problem:'Bilingual products can break when layout, hierarchy or interaction assumptions are built around one language. AI conversations add another challenge: responses vary in length, confidence and complexity.',
 hypothesis:'If language choice is treated as a product state—not a utility toggle—and the conversation model is designed for both LTR and RTL from the start, the experience can remain coherent without making the interface feel technical.',
 audience:'Mobile users interacting with an AI assistant in Arabic or English across everyday information and task-oriented conversations.',
 discovery:['Language changes reading direction, density and scanning behavior—not just words.','Long AI answers need strong visual anchors and progressive disclosure.','Users need an easy way to continue, refine or switch language.'],painPoints:['RTL/LTR inconsistency','Long responses become visually heavy','Language controls compete with the conversation'],opportunities:['Design bilingual parity into the component system','Create response anatomy with scan points','Keep language state visible but quiet'],ia:['Home','Language / intent','Conversation','Response details','Saved results'], journey:['Choose language and intent','Start a conversation','Scan the response','Ask, refine or switch language','Save or act on the useful result'],
 stages:[
  {title:'01 — Understand',body:'Map language-sensitive moments and identify where direction, content length or terminology could change the experience.',outputs:['RTL / LTR audit','Conversation intents','Content hierarchy']},
  {title:'02 — Model',body:'Define a conversation structure that supports short answers, long-form responses, follow-up prompts and system states.',outputs:['Conversation anatomy','Prompt patterns','State model']},
  {title:'03 — Design',body:'Build mobile screens with strong rhythm, readable response blocks and obvious affordances for continuation.',outputs:['High-fidelity UI','RTL variants','Interaction states']},
  {title:'04 — Refine',body:'Stress-test long strings, mixed-language content and edge cases so the visual system remains stable.',outputs:['Responsive rules','QA checklist','Content tests']}
 ],
 decisions:['Design the layout for RTL from day one instead of mirroring at the end.','Keep assistant and user messages visually distinct without over-decorating them.','Use a persistent but quiet language control.','Give long answers breathing room and clear scan points.'],
 system:['Conversation bubbles','Language switcher','Prompt chips','Response states','RTL-aware spacing rules'],
 outcome:'The case study demonstrates an approach to inclusive AI design where bilingual parity is part of the core product architecture, not an afterthought.',
 note:'Specific business metrics were not available in the supplied portfolio material, so none are claimed.',accent:'Bilingual',visual:'chat'
},
{
 slug:'zakipay',number:'03',kicker:'FINTECH',title:'ZakiPay — Family finance, made human',
 summary:'A finance experience focused on trust, clarity and everyday money decisions rather than intimidating financial density.',
 role:'Product / UI/UX Design',scope:['Fintech UX','Mobile UI','Financial flows','Design system'],
 context:'ZakiPay is framed as a consumer fintech experience where money movement, balances and activity need to be understood quickly by people with different levels of financial confidence.',
 problem:'Financial interfaces often give every number equal visual weight. That creates noise at exactly the moment users need certainty: before sending, receiving or reviewing money.',
 hypothesis:'If the interface organizes around decisions and reassurance—what can I do, what changed, and is it safe?—users can complete financial tasks without having to decode the UI first.',
 audience:'Everyday users managing balances, transactions and shared/family money activity on mobile.',
 discovery:['Users scan for balance, recipient and status before reading secondary detail.','Financial errors require recovery paths, not only success states.','Confirmation should reduce anxiety instead of adding visual noise.'],painPoints:['Equal visual weight across too many numbers','Unclear transaction status','Dense confirmation screens'],opportunities:['Center each flow on one decision','Make status and recovery explicit','Use progressive disclosure for transaction metadata'],ia:['Home','Balance','Send / receive','Review','Confirmation','Activity'], journey:['Check balance / recent activity','Choose a money action','Review recipient and amount','Confirm with confidence','See the result and next useful action'],
 stages:[
  {title:'01 — Map risk',body:'Identify where financial errors feel expensive: recipient selection, amount entry, confirmation and transaction status.',outputs:['Risk map','Task flows','Error scenarios']},
  {title:'02 — Simplify',body:'Reduce each primary flow to one clear decision per screen, while preserving access to supporting detail.',outputs:['Flow simplification','Content hierarchy','Wireframes']},
  {title:'03 — Build trust',body:'Use status, confirmation and transaction patterns that communicate what happened without creating alarm.',outputs:['Confirmation states','Transaction cards','Feedback patterns']},
  {title:'04 — Scale',body:'Turn money, status and identity patterns into a reusable component language across mobile surfaces.',outputs:['Design system','Components','Responsive behavior']}
 ],
 decisions:['Make amount and recipient the visual anchors of payment confirmation.','Separate success, pending and failed states with language—not color alone.','Keep secondary transaction metadata available but quiet.','Design for recovery: users should understand what to do after an error.'],
 system:['Balance cards','Transaction rows','Payment confirmation','Status states','Input / validation patterns'],
 outcome:'A portfolio case study that shows how visual hierarchy, content design and state thinking can make fintech feel calm without sacrificing precision.',
 note:'Quantitative outcomes were not available in the supplied project material; metrics are intentionally omitted.',accent:'Fintech',visual:'finance'
},
{
 slug:'carluex',number:'04',kicker:'MOBILITY / UI',title:'Carluex — Next-gen in-car infotainment',
 summary:'An automotive interface exploration built around glanceability, hierarchy and a cohesive visual language.',
 role:'UI/UX Designer',scope:['Automotive UI','Information hierarchy','Interaction patterns','Visual system'],
 context:'Carluex is publicly listed in Tayyaba’s Behance work as a next-generation in-car infotainment UI/UX project. The strongest design lens is therefore the constraint: the interface must work while attention is divided.',
 problem:'In a vehicle, the interface competes with the road, passengers and physical controls. Dense dashboards, tiny targets and decorative interactions can create unnecessary cognitive load.',
 hypothesis:'If the interface prioritizes glanceable hierarchy, context-specific controls and consistent interaction behavior, users can access more capability without the screen feeling busy.',
 audience:'Drivers and passengers using navigation, media, vehicle information and connected controls in an in-car environment.',
 discovery:['Glanceability matters more than information density while driving.','Controls should adapt to context and remain predictable.','Navigation, media and vehicle status compete for limited attention.'],painPoints:['Dense dashboard hierarchy','Small or inconsistent targets','Context switching between vehicle tasks'],opportunities:['Prioritize one primary task per state','Use large glanceable modules','Keep secondary controls consistent and discoverable'],ia:['Home','Navigation','Media','Vehicle','Climate','Settings'], journey:['Glance at current state','Choose a context','Perform the primary action','Confirm without losing orientation','Return to the driving context'],
 stages:[
  {title:'01 — Context',body:'Define what deserves attention while driving versus what can wait until the vehicle is stationary.',outputs:['Context map','Priority matrix','Safety assumptions']},
  {title:'02 — Hierarchy',body:'Create large, predictable information zones and reduce competing emphasis.',outputs:['Layout system','Control groups','Navigation model']},
  {title:'03 — Interaction',body:'Prototype transitions and states that preserve orientation as the driver moves between contexts.',outputs:['Interaction model','Motion states','Prototype']},
  {title:'04 — Polish',body:'Apply a premium visual language while protecting legibility, contrast and consistency.',outputs:['Visual system','Component states','UI polish']}
 ],
 decisions:['Keep primary driving information persistent.','Group controls by context instead of feature inventory.','Use motion to explain state change, not to decorate.','Design large targets and clear return paths.'],
 system:['Media player','Navigation card','Vehicle status','Context controls','Glanceable alerts'],
 outcome:'The project becomes a strong visual proof point for systems thinking: a coherent interface language across a constrained, high-attention environment.',
 note:'Project framing is based on the publicly listed Behance project title/context; no performance claims are inferred.',accent:'Mobility',visual:'car'
},
{
 slug:'evelingo',number:'05',kicker:'EDTECH',title:'Evelingo — Learning that feels alive',
 summary:'A modern learning experience balancing motivation, clarity and a friendly visual system.',
 role:'UI/UX Designer',scope:['EdTech UX','Mobile UI','Learning flows','Prototyping'],
 context:'Evelingo is publicly listed in Tayyaba’s Behance work as an engaging learning UI/UX project. The design opportunity is to make progress visible without turning learning into a game dashboard.',
 problem:'Learners need motivation, but they also need orientation: where am I, what should I do next, and why does this activity matter?',
 hypothesis:'If the product makes progress and the next useful action obvious, personality can support motivation instead of competing with the learning task.',
 audience:'Learners using a mobile-first educational product to discover lessons, complete activities and track progress.',
 discovery:['Learners need visible progress to maintain momentum.','The next action should be obvious when returning to the product.','Practice and feedback should feel lightweight, not like administration.'],painPoints:['Unclear next lesson','Progress feels abstract','Too much friction between learning moments'],opportunities:['Turn progress into a motivational feedback loop','Surface a single recommended next step','Make practice states short and focused'],ia:['Home','Continue','Lesson','Practice','Feedback','Progress'], journey:['See progress','Choose the next lesson','Learn / practice','Receive feedback','Understand progress and continue'],
 stages:[
  {title:'01 — Motivation',body:'Identify the moments where learners hesitate, abandon or lose context.',outputs:['Motivation map','Learning journey','Drop-off hypotheses']},
  {title:'02 — Flow',body:'Reduce the number of decisions required before the learner can start useful work.',outputs:['Lesson flow','Navigation model','Wireframes']},
  {title:'03 — Feedback',body:'Make completion, mistakes and progress feel informative rather than punitive.',outputs:['Feedback states','Progress patterns','Micro-interactions']},
  {title:'04 — System',body:'Create a repeatable visual grammar for lessons, cards, progress and learning content.',outputs:['Component library','Typography','Visual rules']}
 ],
 decisions:['Put the next lesson/action in a dominant position.','Make progress concrete and readable.','Use personality in illustration and motion, not at the cost of hierarchy.','Keep feedback actionable: explain what happened and what comes next.'],
 system:['Progress rings','Lesson cards','Feedback states','Achievement moments','Content modules'],
 outcome:'The case study highlights the ability to translate a learning goal into a product experience that feels welcoming, structured and purposeful.',
 note:'No unverified download or engagement figures are presented.',accent:'EdTech',visual:'learn'
},
{
 slug:'memo',number:'06',kicker:'FINTECH / SAAS',title:'Memo — Finance at a glance',
 summary:'A dashboard and mobile UI direction balancing data density with a calm, understandable visual system.',
 role:'Product / UI Designer',scope:['Dashboard UX','Data visualization','Responsive UI','Components'],
 context:'Memo is publicly listed in Tayyaba’s Behance work as a fintech dashboard and mobile UI/UX project. The design challenge is information density: the user should see what matters before seeing everything.',
 problem:'Dashboards fail when every metric looks equally important. Users end up scanning instead of understanding, especially when desktop and mobile surfaces share the same data model.',
 hypothesis:'If the hierarchy is designed around questions—what changed, why, and what should I do next—the dashboard can become a decision surface rather than a data wall.',
 audience:'Finance-minded users and teams reviewing balances, cash flow, transactions and trends across desktop and mobile.',
 discovery:['Financial users need a quick read before detailed analysis.','Trends are more useful when paired with concrete transactions.','Dashboard density should scale from overview to investigation.'],painPoints:['Too much data without hierarchy','Hard to connect trends to transactions','Analysis competes with routine actions'],opportunities:['Create overview → insight → detail layers','Pair charts with contextual records','Use consistent financial states and filters'],ia:['Overview','Cash flow','Transactions','Reports','Details','Filters'], journey:['Scan health of the account','Spot a change','Drill into the cause','Compare / filter detail','Take the next action'],
 stages:[
  {title:'01 — Questions',body:'Start with the questions users ask of the dashboard rather than the metrics the database happens to contain.',outputs:['Question inventory','Metric priority','Content model']},
  {title:'02 — Hierarchy',body:'Build a primary-to-secondary rhythm using scale, position, whitespace and grouping.',outputs:['Dashboard anatomy','Grid','Responsive strategy']},
  {title:'03 — Visualize',body:'Choose chart forms that answer a question quickly and keep detail available on demand.',outputs:['Chart patterns','Data states','Filters']},
  {title:'04 — Systemize',body:'Translate repeated patterns into components that can travel between desktop and mobile.',outputs:['Components','Responsive rules','Design QA']}
 ],
 decisions:['Make account health visible before detailed analysis.','Use charts only when they reveal a relationship faster than a number.','Treat mobile as a re-prioritization, not a shrink-down.','Keep filtering and drill-down predictable.'],
 system:['KPI cards','Trend charts','Transaction tables','Filters','Responsive modules'],
 outcome:'A focused proof of visual hierarchy, data storytelling, responsive thinking and component-level craft.',
 note:'The public Behance listing identifies Memo as a fintech dashboard & mobile UI project; detailed metrics were not available.',accent:'Data',visual:'memo'
},
];
