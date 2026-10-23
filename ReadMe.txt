BUILD 2026-10-23T03:15:00Z
On top of: 2026-10-23T02:45:00Z
SQL needed: no structure SQL. Two data files, Flometriq only:
            ramesh_drift_card_2026-10-23.sql   — Ramesh's pinned checklist card
            trello_drift_5_history.sql         — earlier revisions from Trello (saved to your Downloads)

WHAT CHANGED — PINNED CHECKLIST CARDS
1. A task card with the label "Pinned":
     - red background and a 📌 PINNED chip;
     - top of every list on the board, whatever the sort order (above Urgent);
     - when it is saved with every box ticked (sub-items included), the app completes it and it
       leaves the board — "Every box ticked: pinned card completed" in its log. Until then it stays.
   Ticks are kept when he presses Save on the card (as for any card).

2. Start-up progress report for the VP Projects post (Suresh Subramaniam)
   When he starts the app and any pinned card is open, a ⚑ Progress report opens first:
   each pinned card, whose it is, due date, x of y boxes with a bar, and each checklist group with
   its own count. "Open task boards" / "Close". Once per app start; the bell also gets a ⚑ flag with
   the counts once a day. It stops by itself when no pinned card is open.

3. Ramesh's card (ramesh_drift_card_2026-10-23.sql)
   "Trello drift clean-up — Document Control" on the Document Controller post holder's board,
   due 28 Oct 2026, 111 boxes in 9 groups:
     1 Document numbers (-TR- placeholders) — one box per contract (35)
     2 The 4 links missing on Trello
     3 Statuses (the two Code A labels mapped by judgement, then the rest)
     4 Veolia 260095 — 19 statuses; archive duplicates of GAD 668 / ITP 669 / DS 666 / PV Elite 670
     5 Duplicates to archive (260061, 260150, 260155, 260128)
     6 id 624 document number
     7 The 14 contracts that had only the PO — check against each VDRL
     8 The 31 contracts with no documents in the app — Contract Register with the Sales Coordinator
     9 The 9 app contracts with no open Trello list
   Info-only documents (40) need no confirmation — not on the card.

REVISION HISTORY (trello_drift_5_history.sql)
   278 earlier revisions on 54 documents, from the Trello revision checklists: Rev, In/Out, date,
   OneDrive link; status Out = Third Party Action Pending, In = Code 1 / 2 / 3 where Trello noted it,
   otherwise Our Action Pending - Resubmission. Trello's wording is kept in each row's reason.
   An earlier revision never gets a higher Rev or a later time than the current one, so no card moves.
   The last line checks it: latest_changed_should_be_0 = 0. Safe to re-run.
   Run order: trello_drift_5_history.sql, then ramesh_drift_card_2026-10-23.sql — then send the brief.

Tested: pinned helpers and auto-close on a stub; card SQL with labels as jsonb and as text[];
history SQL on a copy of the table layout (higher-numbered old revisions pulled under the current one).

Manual (English and Tamil): new article "Pinned checklist cards and the VP Projects progress report".
Files to deploy: Index.html, version.txt. This ReadMe and the SQL files are not deployed.
